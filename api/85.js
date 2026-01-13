// Fajl: api/get-data.js

import fetch from 'node-fetch';

// --- 1. KOMPLETAN RED VOŽNJE (Vaši podaci) ---
const timetableMapA = {
  "04:20:00": 7,
  "04:50:00": 10,

  "05:20:00": 12,
  "05:40:00": 1,

  "06:00:00": 3,
  "06:15:00": 4,
  "06:29:00": 5,
  "06:42:00": 13,
  "06:54:00": 6,

  "07:06:00": 7,
  "07:18:00": 8,
  "07:31:00": 9,
  "07:43:00": 10,
  "07:55:00": 11,

  "08:07:00": 12,
  "08:19:00": 14,
  "08:32:00": 1,
  "08:45:00": 2,
  "08:58:00": 3,

  "09:11:00": 4,
  "09:24:00": 5,
  "09:29:00": 13,
  "09:37:00": 6,
  "09:50:00": 7,

  "10:03:00": 8,
  "10:17:00": 9,
  "10:30:00": 10,
  "10:44:00": 11,
  "10:57:00": 12,

  "11:11:00": 1,
  "11:24:00": 2,
  "11:38:00": 3,
  "11:51:00": 4,

  "12:05:00": 5,
  "12:18:00": 6,
  "12:32:00": 7,
  "12:45:00": 8,
  "12:58:00": 9,

  "13:11:00": 13,
  "13:24:00": 10,
  "13:36:00": 11,
  "13:49:00": 12,

  "14:01:00": 1,
  "14:14:00": 2,
  "14:26:00": 14,
  "14:39:00": 3,
  "14:51:00": 4,

  "15:04:00": 5,
  "15:16:00": 6,
  "15:29:00": 7,
  "15:42:00": 8,
  "15:55:00": 9,

  "16:07:00": 13,
  "16:20:00": 10,
  "16:33:00": 11,
  "16:46:00": 12,
  "16:58:00": 1,

  "17:11:00": 2,
  "17:24:00": 14,
  "17:37:00": 3,
  "17:49:00": 4,

  "18:02:00": 5,
  "18:15:00": 6,
  "18:28:00": 7,
  "18:41:00": 8,
  "18:54:00": 9,

  "19:07:00": 13,
  "19:16:00": 10,
  "19:22:00": 11,
  "19:38:00": 12,
  "19:54:00": 1,

  "20:02:00": 2,
  "20:10:00": 14,
  "20:26:00": 3,
  "20:42:00": 4,
  "20:58:00": 6,

  "21:14:00": 7,
  "21:22:00": 8,
  "21:30:00": 9,
  "21:46:00": 13,

  "22:02:00": 11,
  "22:20:00": 12,
  "22:40:00": 1,
  "22:44:00": 14,

  "23:00:00": 3,
  "23:25:00": 6,
  "23:50:00": 7,

  "00:09:00": 13,
  "00:39:00": 12
}
;
const timetableMapB = {
  "04:20:00": 1,
  "04:45:00": 4,

  "05:07:00": 5,
  "05:25:00": 6,
  "05:41:00": 7,
  "05:56:00": 9,

  "06:11:00": 10,
  "06:25:00": 11,
  "06:38:00": 12,
  "06:51:00": 14,

  "07:04:00": 1,
  "07:16:00": 2,
  "07:29:00": 3,
  "07:41:00": 4,
  "07:54:00": 5,

  "08:06:00": 13,
  "08:19:00": 6,
  "08:31:00": 7,
  "08:44:00": 8,
  "08:56:00": 9,

  "09:09:00": 10,
  "09:21:00": 11,
  "09:34:00": 12,
  "09:37:00": 14,
  "09:47:00": 1,

  "10:00:00": 2,
  "10:14:00": 3,
  "10:27:00": 4,
  "10:41:00": 5,
  "10:54:00": 6,

  "11:08:00": 7,
  "11:21:00": 8,
  "11:35:00": 9,
  "11:48:00": 10,

  "12:02:00": 11,
  "12:15:00": 12,
  "12:29:00": 1,
  "12:42:00": 2,
  "12:54:00": 14,

  "13:07:00": 3,
  "13:20:00": 4,
  "13:33:00": 5,
  "13:46:00": 6,
  "13:58:00": 7,

  "14:11:00": 8,
  "14:24:00": 9,
  "14:37:00": 13,
  "14:49:00": 10,

  "15:02:00": 11,
  "15:15:00": 12,
  "15:28:00": 1,
  "15:41:00": 2,
  "15:53:00": 14,

  "16:06:00": 3,
  "16:19:00": 4,
  "16:32:00": 5,
  "16:45:00": 6,
  "16:58:00": 7,

  "17:11:00": 8,
  "17:23:00": 9,
  "17:36:00": 13,
  "17:49:00": 10,

  "18:02:00": 11,
  "18:15:00": 12,
  "18:28:00": 1,
  "18:41:00": 2,
  "18:54:00": 14,

  "19:07:00": 3,
  "19:21:00": 4,
  "19:24:00": 5,
  "19:34:00": 6,
  "19:48:00": 7,

  "20:01:00": 8,
  "20:15:00": 9,
  "20:29:00": 13,
  "20:43:00": 11,
  "20:59:00": 12,

  "21:16:00": 1,
  "21:33:00": 14,
  "21:50:00": 3,

  "22:00:00": 4,
  "22:10:00": 6,
  "22:30:00": 7,
  "22:40:00": 9,

  "23:00:00": 13,
  "23:11:00": 11,
  "23:30:00": 12,
  "23:50:00": 1,

  "00:10:00": 3,
  "00:35:00": 6,
  "00:59:00": 7
}
;
const URLS = [
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=22803", timetable: timetableMapA },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=20806", timetable: timetableMapA },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=22671", timetable: timetableMapA },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=20187", timetable: timetableMapB },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=20404", timetable: timetableMapB },
	{ url: "https://beograd.prometko.si/api/stations/arrivals?station=22212", timetable: timetableMapB },
];
const CLEAN_REGEX = /[^\d:.]/g;

// --- 2. OVO JE GLAVNA VERCEL FUNKCIJA ---
export default async function handler(request, response) {
    let allResults = [];
    
    for (const { url, timetable } of URLS) {
        try {
            const apiResponse = await fetch(url);
            if (!apiResponse.ok) continue;
            
            const data = await apiResponse.json();
            const arrivals = data.data && data.data.arrivals ? data.data.arrivals : null;
            if (!arrivals || arrivals.length === 0) continue;

            arrivals
                .filter((bus) => bus.lc === "85")
                .forEach((bus) => {
                    const vehicleId = bus.i;
                    let apiTime = bus.dt;
                    if (!apiTime) return;

                    apiTime = apiTime.trim().replace(CLEAN_REGEX, '');
                    if (apiTime.includes('.')) apiTime = apiTime.split('.')[0];
                    if (apiTime.length === 5 && apiTime.includes(':')) apiTime = apiTime + ":00";
                    
                    const blockNumber = timetable[apiTime];

                    if (blockNumber) {
                        allResults.push({
                            time: apiTime,
                            block: blockNumber,
                            vehicle: vehicleId,
                        });
                    }
                });
        } catch (error) {
            // Ignorišemo greške pojedinačnih stanica
            console.error(`Greška pri dohvatanju ${url}:`, error.message);
        }
    }

    // Filtriranje i sortiranje
    const uniqueResults = allResults.filter((item, index, self) =>
        index === self.findIndex((t) => (t.block === item.block && t.vehicle === item.vehicle))
    );
    uniqueResults.sort((a, b) => a.block - b.block);

    // --- 3. SLANJE PODATAKA STRANICI ---
    // Umesto console.log, šaljemo JSON odgovor
    
    // Kažemo pregledaču da kešira odgovor na 1 minut (60 sekundi)
    // Ovo sprečava da vaš sajt obara prometko.si ako imate puno poseta
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    
    response.status(200).json({
        lastUpdated: new Date().toISOString(),
        results: uniqueResults
    });

}
