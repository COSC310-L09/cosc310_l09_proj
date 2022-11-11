import cv2 as cv, time, pandas
from datetime import datetime

status_list = [None,None]
times = []
df = pandas.DataFrame(columns=["Start","End"])

cap = cv.VideoCapture(0)

if (cap.isOpened() == False):
    print("Error opening the video file")

    # grabs frames for subtraction
ret, frame1 = cap.read()
ret, frame2 = cap.read()

while cap.isOpened():
    status = 0

    # generates base image for subtraction from base 2 frames
    diff = cv.absdiff(frame1, frame2)
    diff_gray = cv.cvtColor(diff, cv.COLOR_BGR2GRAY)
    blur = cv.GaussianBlur(diff_gray, (5, 5), 0)
    _, thresh = cv.threshold(blur, 20, 255, cv.THRESH_BINARY)
    dilated = cv.dilate(thresh, None, iterations=3)

    # this does pretty much all the heavy lifting of the motion detection, it detects shapes generated from the subtracted images
    contours, _ = cv.findContours(
        dilated, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE)

    # draws rectangles around movement and updates status
    for contour in contours:
        (x, y, w, h) = cv.boundingRect(contour)

        # this is where you tweak the size of movement, you can increase this if you are getting too much noise
        if cv.contourArea(contour) < 900:
            continue

        # updates the movement status for the time tracking
        status = 1
        cv.rectangle(frame1, (x, y), (x + w, y + h), (0, 255, 0), 2)
        cv.putText(frame1, "Status: {}".format('Movement'), (10, 20), cv.FONT_HERSHEY_SIMPLEX,
                   1, (255, 0, 0), 3)
    status_list.append(status)

    status_list=status_list[-2:]

    # this does the heavy lifting of appending the time
    if status_list[-1]==1 and status_list[-2]==0:
        times.append(datetime.now())
    if status_list[-1]==0 and status_list[-2]==1:
        times.append(datetime.now())

    cv.imshow("Video", frame1)
    frame1 = frame2
    ret, frame2 = cap.read()

    key=cv.waitKey(1)

    # press q to quit the motion detection
    if key == ord('q'):
        if status == 1:
            times.append(datetime.now())
        break

print(status_list)
print(times)

# writes the times down into a list
for i in range(0, len(times), 2):
    df = df.append({"Start": times[i],"End": times[i+1]}, ignore_index=True)

# prints the list to a csv file
df.to_csv("Times.csv")

cap.release()
cv.destroyAllWindows