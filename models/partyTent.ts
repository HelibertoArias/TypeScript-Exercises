import { MeetingResource } from "./meetingResource";

export class PartyTent implements MeetingResource{
    name:string;
    capacity: number;
    companyOwed: boolean;
    tablesIncluded: number;
}

export const partyTentRoomData: PartyTent[]= [
    { name: "Dummy", capacity: 15, companyOwed: false, tablesIncluded:1},
    { name: "Dummy 1", capacity: 25, companyOwed: true, tablesIncluded: 2},
    { name: "Dummy 2", capacity: 35, companyOwed: false, tablesIncluded: 3}
]