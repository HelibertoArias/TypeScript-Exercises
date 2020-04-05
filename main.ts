/*import { ConferenceRoom, conferenceRoomData } from "./models/confereneRoom";

import { MeetingResource } from "./models/meetingResource";

function getBigRooms<T extends MeetingResource>(rooms:Array<T>, minSize:number): Array<T> {
    let bigRooms: Array<T> = [];

    rooms.forEach( x=> {
        if(x.capacity > minSize){
            bigRooms.push(x);
        }
    });

    return bigRooms;
}

let bigRooms :Array<ConferenceRoom> = getBigRooms<ConferenceRoom>(conferenceRoomData, 10);
console.log(bigRooms);
*/


// function shortenArray<T>(data:Array<T>, amountToShorten:number) :Array<T>{
//     return data.splice(amountToShorten, data.length);
// }

// let stringArray: string[] = ["C++", "Javascript", "CSS", "HTML5", "SQL"];

// let fewerLanguages = shortenArray<string>(stringArray, 2);

// console.log(fewerLanguages);

