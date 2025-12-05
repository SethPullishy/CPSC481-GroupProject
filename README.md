# CPSC481-GroupProject
This is the HTML and CSS code comprising of our CPSC481 final project. bus ticketing kiosk system

 This is designed for a computer with a (potentially) different aspect ratio from your laptop, the current size of the screen is 1920x1080, a 16:9 ratio. Since we are simulating a kiosk, the necessary machinery for a kiosk, like card payment machines, coin/cash payment machines, ticket dispensers, ticket printers, receipt printers, among other necessary external devices has been assumed to be installed along with the kiosk, and their actions are reflected by the screens projected. Imitating a kiosk, the current programs is reflecting the functionality of a kiosk on a website for a computer, therefore the user's interaction of tapping on a kiosk screen should be imitated with a mouse press of m1, but any changes while moving the mouse without the mouse being pressed should be ignored. 

To run as currently set up, select waiting_screen.html and run that. It will open in your browser and you can move from there. As the project moves towards finished this is subject to change.

The waiting screen consists of information about the transit schedules in the middle portion of the screen, and news about the transit on the bottom bar. The 4 buttons accesses the map screen, schedule screen, help screen, and the french waiting screen respetively. The home screen can be accessed by pressing the button that states "Press to Start"

The welcome screen presents 4 buttons for the user, Buy tickets, Map, Check timings(Schedule) and Quick Buy. Quick buy automatically goes to the payment screen for 1 regular adult payment.

The ticket screens will automatically add the total cost of the tickets, alond with the ticket quantities while pressing on the + for adding +1 ticket and - for revmoing -1 ticket. The Youth/Adult screens can be switched with the "+ Select Youth/Adult tickets" button and the difference of the screens will be represented by the bolded "Select Youth/Adult Ticket" title.

The payment screen will simulate when a user has not added any tickets on the ticket screens. The clear cart will automatically remove all selected tickets in the cart.

The card screen is simulating a payment process which would wait until the user finish using the card machine, which will be simulated by pressing on the center button.

The print reciept screen is simulating the printing of reciept process which would wait until the reciept has been full printed by the reciept printing machine, which will be simulated by pressing on the center button.

The thank you screen will automatically return to the welcome screne after 3 seconds, resetting all data that was previously saved by the kiosk.