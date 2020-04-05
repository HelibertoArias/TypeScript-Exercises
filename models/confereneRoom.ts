import { MeetingResource } from "./meetingResource";

export class ConferenceRoom implements MeetingResource{
    name:string;
    capacity: number;
    hasProjector: boolean;
    location: string;
}

export const conferenceRoomData: ConferenceRoom[]= [
    { name: "Dummy", capacity: 10, hasProjector: false, location: "hey"},
    { name: "Dummy 1", capacity: 20, hasProjector: true, location: "hey 1"},
    { name: "Dummy 2", capacity: 30, hasProjector: false, location: "hey 2"},
]