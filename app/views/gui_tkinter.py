from tkinter import *

root = Tk()

entry = Entry(root, width=50)
entry.pack()


def myClick():
    myLabelClick = Label(root, text="result of button click")
    myLabelClick.pack()


def inputClick():
    hello = "input here: " + entry.get()
    inputClick = Label(root, text=hello)
    inputClick.pack()


myLabel = Label(root, text="hell0 world")
myLabel2 = Label(root, text="next line")
# myLabel3 = Label(root, text="truncated code line").grid(row=2, column=2)

# myLabel.grid(row=0, column=0)
# myLabel2.grid(row=1, column=1)

myLabel.pack()
myLabel2.pack()

myButton = Button(root, text='Click HERE', padx=200, pady=100, command=myClick, fg="#000000", bg="#e7e7e7")
myButton.pack()

myButton = Button(root, text='Click HERE', padx=200, pady=100, command=inputClick, fg="#000000", bg="#e7e7e7")
myButton.pack()

root.mainloop()
