
import AvailabilityList from "../components/Scheduler/AvailabilityList";
import "../styles/Scheduler/PickupScheduler.css"
const sampleData = [
    { id: "1", name: "Steak", quantity: 5 },
    { id: "2", name: "Bread", quantity: 10 },
  ];
const handleBooking = (id: string) => {
    console.log(`Booking confirmed for item ID: ${id}`);
};

const PickupScheduler = () => {
    return (
        <>
        <div className="container">
            <AvailabilityList items = {sampleData} onBook={handleBooking}/>
        </div>
        </>
    )
}
export default PickupScheduler;