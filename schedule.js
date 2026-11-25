/* =========================================================
   NEW ENGLAND TRAVELER - MONTHLY TV SCHEDULE
   Each month, replace ONLY the month name and the airings list.
   Format for each airing:
   { network: "NESN" or "NESN+", date: "YYYY-MM-DD", time: "8:00 AM", ep: 17, title: "Episode title" }
   Add  isNew: true  to show a NEW tag on a premiere.
   The day of the week and the order are worked out automatically.
   ========================================================= */
window.NET_SCHEDULE = {
  month: "December 2026",
  airings: [
    // NESN
    { network: "NESN", date: "2026-12-06", time: "8:00 AM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN", date: "2026-12-06", time: "10:30 PM", ep: 35, title: "Stick Season" },
    { network: "NESN", date: "2026-12-07", time: "9:30 PM", ep: 37, title: "Ready to Fly" },
    { network: "NESN", date: "2026-12-13", time: "8:00 AM", ep: 24, title: "Magically Delicious" },
    { network: "NESN", date: "2026-12-13", time: "10:30 PM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN", date: "2026-12-15", time: "11:30 PM", ep: 38, title: "G-Plane" },
    { network: "NESN", date: "2026-12-20", time: "8:00 AM", ep: 31, title: "Winter Wonderland" },
    { network: "NESN", date: "2026-12-20", time: "10:30 PM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN", date: "2026-12-24", time: "10:00 PM", ep: 31, title: "Winter Wonderland" },
    { network: "NESN", date: "2026-12-24", time: "10:30 PM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN", date: "2026-12-27", time: "8:00 AM", title: "Brand-New Episode", isNew: true },
    // NESN+
    { network: "NESN+", date: "2026-12-05", time: "12:30 AM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN+", date: "2026-12-06", time: "12:30 AM", ep: 1, title: "New England Dogsledding Adventure" },
    { network: "NESN+", date: "2026-12-07", time: "12:30 AM", ep: 31, title: "Winter Wonderland" },
    { network: "NESN+", date: "2026-12-12", time: "12:30 AM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN+", date: "2026-12-13", time: "12:30 AM", ep: 31, title: "Winter Wonderland" },
    { network: "NESN+", date: "2026-12-14", time: "12:30 AM", ep: 1, title: "New England Dogsledding Adventure" },
    { network: "NESN+", date: "2026-12-19", time: "12:30 AM", ep: 27, title: "Bon Bini Aruba" },
    { network: "NESN+", date: "2026-12-20", time: "12:30 AM", ep: 32, title: "The Los Angeles Traveler" },
    { network: "NESN+", date: "2026-12-21", time: "12:30 AM", title: "Viva Mexico" },
    { network: "NESN+", date: "2026-12-26", time: "12:30 AM", ep: 17, title: "Polar Express: Journey to the North Pole" },
    { network: "NESN+", date: "2026-12-27", time: "12:30 AM", ep: 31, title: "Winter Wonderland" },
    { network: "NESN+", date: "2026-12-28", time: "12:30 AM", ep: 1, title: "New England Dogsledding Adventure" }
  ]
};
