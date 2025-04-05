**Pickup Scheduler**

PickupScheduler.tsx: - Page component that manages food pickup workflow. Currently displays available food items and allows user to book a pickup time via a pop-up modal. These pickups are tracked through pending and completed states, PickupScheduler.tsx serves as the schedulers central control. Handling state and passing data to 4 child components.

- AvailabilityList.tsx: Displays the list of available food items with “Book Pickup” buttons
- Booking.tsx: Pop-up Modal that allows the user to browse and select times, moving the items from the available list to the pending list
- Pending and Completed Pickups: These will be separated out into subcomponents, provides lists of pending and completed pickups. Appears as 2 tables in the UI.

Props & Expected Data Types: 

- items: { id: string; name: string; quantity: number }[]
- onBook: (id: string) => void
- itemId: string | null
- onClose: () => void
- onConfirm: (itemId: string, pickupTime: string) => void
- availableSlots: string[]

Core UI Interaction: The Pickup Scheduler revolves around user-driven state changes and conditional rendering (modal). A user is able to view available food items,  they can initiate a pickup with “Book Pickup” which triggers a state update that sets the selected item id and conditionally displays the Booking modal. Inside the modal, the user selects a pickup time, and upon confirmation the item is removed from the available list and added to the pending list where users can then mark pickups as complete. These are both state updates. This flow keeps all of the logic centralized in the PickupScheduler component with child components focused on display. 

**LoginPage**

LoginPage.tsx: A reusable form component for user login. It collects the user email and password and validates the input and stores it in UserContext.

Props and expected data types 
- email, setEmailInput – Local state to manage email input field
- password, setPasswordInput – Local state to manage password input field
- setEmail – Function from UserContext to store user email globally
- useNavigate() – Navigation hook from React Router to redirect users after login


**MealELem**

- The MealElem component takes in information about the meal in a Meal object and a boolean indicating when it is going in the shopping cart
- Uses context for adding and removing itself from the state which contains meals in shopping cart
- Contains image of meal to the left, information in the center, and button to the right
- Button either adds or removes from cart depending on whether it is created in the shopping cart or in meal search
- As a result, it connects with two larger UI components: the meal search and the shopping cart (will later be featured in scheduler too)

