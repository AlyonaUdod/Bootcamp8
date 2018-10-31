'use strict';

const hotel = {
    name: '7 Days',
    stars: 4,
    rooms: 150,
    hasSwPool: true,
    hasCort: false,
    showName() {
        console.log(`${hotel.name}`);
    },
    changeRoomNum(number) {
        hotel.rooms - number;
        return hotel.rooms;
    },
    openCort() {
        hotel.hasCort = !hotel.hasCort;
    }
}