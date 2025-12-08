# CPSC481-GroupProject

LINK -- https://sethpullishy.github.io/CPSC481-GroupProject/

This is the HTML and CSS code comprising of our CPSC481 final project. bus ticketing kiosk system

 Since we are simulating a kiosk, the necessary machinery for a kiosk, like card payment machines, coin/cash payment machines, ticket dispensers, ticket printers, receipt printers, among other necessary external devices has been assumed to be installed along with the kiosk, and their actions are reflected by the screens projected. Imitating a kiosk, the current programs is reflecting the functionality of a kiosk on a website for a computer, therefore the user's interaction of tapping on a kiosk screen should be imitated with a mouse press of m1, but any changes while moving the mouse without the mouse being pressed should be ignored. 

The optimal way to simulate the touch input kiosk experience is by initially open the welcome screen on any browser, and clicking on ctrl+shift+m. Pressing on the "enable touch simulation" will simulate the touch interactions the users will have on an actual kiosk.

To run as currently set up, select waiting_screen.html and run that. It will open in your browser and you can move from there.

The waiting screen consists of information about the transit schedules in the middle portion of the screen, and news about the transit on the bottom bar. The 4 buttons accesses the map screen, schedule screen, help screen, and the french waiting screen respetively. The home screen can be accessed by pressing the button that states "Press to Start"

The welcome screen presents 4 buttons for the user, Buy tickets, Map, Check timings(Schedule) and Quick Buy. Quick buy automatically goes to the payment screen for 1 regular adult payment.

The ticket screens will automatically add the total cost of the tickets, along with the respective ticket quantities.  Pressing on the + adds 1 ticket and - removes 1 ticket. The Youth/Adult screens can be switched with the "+ Select Youth/Adult tickets" button and the difference of the screens will be represented by the bolded "Select Youth/Adult Ticket" title.

The payment screen will simulate when a user has not added any tickets on the ticket screens. The clear cart will automatically remove all selected tickets in the cart and the return to ticket selection screen returns to ticket screen.

The cash screen is simulating the payment progress from the cash machine, which will be completed by pressing the center button.

The cash option will always result in an error screen, and so, return to payment through the button on the bottom of the screen and procees to card payment to see the full successful flow of the kiosk.

The card screen is simulating a payment process which would wait until the user finish using the card machine, which will be simulated by pressing on the center button or will automatically go to the next screen after 3 seconds.

The print reciept screen is simulating the printing of reciept process which would wait until the reciept has been full printed by the reciept printing machine, which will be simulated by pressing on the center button or will automatically go to the next screen after 3 seconds.

The french buttons will change the pages and the folling changes to french, which can be reverted by pressing the now changed english button and will remain in the french language until the thank you screen resets the kiosk.

The route screen will automatically provide the from location, which is brentwood station, and the To destinations are predetermined, with each selection showing a screenshot of the routes in google map.

The Schedule screen will showcase every bus number in numerical order, with their schedule and next esimated arrival, along with their current status (late/early/on time)

The help button provides a list of commonly asked questions, which can be clicked on for the answer.

The thank you screen will automatically return to the welcome screne after 3 seconds, resetting all data that was previously saved by the kiosk.