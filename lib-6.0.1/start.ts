type Motor = { color: string; doors: number; wheels: number; fourWheelDrive: boolean; };
type Track = { doubleCab: boolean; winch: boolean; }
type PickUpTrack = Motor & Track;

function TrackBuilder(vehicle: PickUpTrack): PickUpTrack { return vehicle; }

const redTruck: PickUpTrack = { color: "red", doors: 4, doubleCab: true, fourWheelDrive: true, wheels: 4, winch: true };

console.log(redTruck);