// Fajl: api/get-data.js

import fetch from 'node-fetch';

// --- 1. KOMPLETAN RED VOŽNJE (Vaši podaci) ---
const timetableMapA = {
  "05:40:00": 11,
  "05:55:00": 1,

  "06:06:00": 3,
  "06:17:00": 12,
  "06:28:00": 4,
  "06:39:00": 5,
  "06:49:00": 6,
  "06:59:00": 7,

  "07:08:00": 8,
  "07:17:00": 9,
  "07:26:00": 10,
  "07:35:00": 11,
  "07:44:00": 13,
  "07:53:00": 1,

  "08:03:00": 2,
  "08:12:00": 3,
  "08:21:00": 4,
  "08:30:00": 12,
  "08:40:00": 5,
  "08:50:00": 6,

  "09:00:00": 7,
  "09:11:00": 8,
  "09:21:00": 9,
  "09:32:00": 10,
  "09:42:00": 11,
  "09:46:00": 13,
  "09:53:00": 1,

  "10:03:00": 2,
  "10:14:00": 3,
  "10:24:00": 4,
  "10:35:00": 5,
  "10:45:00": 6,
  "10:56:00": 7,

  "11:07:00": 8,
  "11:17:00": 9,
  "11:28:00": 10,
  "11:38:00": 11,
  "11:49:00": 1,
  "11:59:00": 2,

  "12:09:00": 3,
  "12:19:00": 4,
  "12:29:00": 5,
  "12:39:00": 6,
  "12:50:00": 7,

  "13:00:00": 14,
  "13:10:00": 8,
  "13:19:00": 9,
  "13:28:00": 10,
  "13:37:00": 11,
  "13:46:00": 13,
  "13:55:00": 1,

  "14:04:00": 2,
  "14:13:00": 3,
  "14:22:00": 4,
  "14:31:00": 5,
  "14:40:00": 6,
  "14:49:00": 12,
  "14:58:00": 7,

  "15:08:00": 14,
  "15:17:00": 8,
  "15:26:00": 9,
  "15:36:00": 10,
  "15:45:00": 11,
  "15:55:00": 13,

  "16:04:00": 1,
  "16:14:00": 2,
  "16:23:00": 3,
  "16:33:00": 4,
  "16:42:00": 5,
  "16:51:00": 6,

  "17:01:00": 12,
  "17:10:00": 7,
  "17:20:00": 14,
  "17:30:00": 8,
  "17:40:00": 9,
  "17:49:00": 10,
  "17:59:00": 11,

  "18:09:00": 13,
  "18:19:00": 1,
  "18:28:00": 2,
  "18:33:00": 3,
  "18:38:00": 4,
  "18:48:00": 5,
  "18:58:00": 6,

  "19:08:00": 7,
  "19:18:00": 14,
  "19:28:00": 8,
  "19:38:00": 9,
  "19:40:00": 10,
  "19:49:00": 11,

  "20:00:00": 13,
  "20:11:00": 1,
  "20:22:00": 2,
  "20:33:00": 4,
  "20:43:00": 5,
  "20:54:00": 6,

  "21:05:00": 7,
  "21:16:00": 8,
  "21:27:00": 9,
  "21:37:00": 11,
  "21:48:00": 13,
  "21:59:00": 1,

  "22:10:00": 2,
  "22:21:00": 4,
  "22:32:00": 6,
  "22:43:00": 7,
  "22:54:00": 8,

  "23:05:00": 9,
  "23:20:00": 11,
  "23:35:00": 13,
  "23:43:00": 1,
  "23:55:00": 2,

  "00:20:00": 6,
  "00:40:00": 9
}
;
const timetableMapB = {
  "04:55:00": 11,

  "05:10:00": 3,
  "05:30:00": 4,
  "05:43:00": 5,
  "05:55:00": 7,

  "06:06:00": 8,
  "06:16:00": 9,
  "06:26:00": 10,
  "06:35:00": 11,
  "06:45:00": 13,
  "06:54:00": 1,

  "07:04:00": 2,
  "07:13:00": 3,
  "07:23:00": 12,
  "07:32:00": 4,
  "07:42:00": 5,
  "07:51:00": 6,

  "08:01:00": 7,
  "08:10:00": 8,
  "08:20:00": 9,
  "08:29:00": 10,
  "08:39:00": 11,
  "08:49:00": 13,
  "08:59:00": 1,

  "09:10:00": 2,
  "09:20:00": 3,
  "09:23:00": 12,
  "09:30:00": 4,
  "09:40:00": 5,
  "09:50:00": 6,

  "10:00:00": 7,
  "10:11:00": 8,
  "10:21:00": 9,
  "10:31:00": 10,
  "10:41:00": 11,
  "10:51:00": 1,

  "11:01:00": 2,
  "11:12:00": 3,
  "11:22:00": 4,
  "11:33:00": 5,
  "11:43:00": 6,
  "11:54:00": 7,

  "12:05:00": 8,
  "12:15:00": 9,
  "12:26:00": 10,
  "12:36:00": 11,
  "12:47:00": 1,
  "12:57:00": 2,

  "13:07:00": 3,
  "13:17:00": 4,
  "13:26:00": 5,
  "13:35:00": 6,
  "13:44:00": 12,
  "13:53:00": 7,

  "14:02:00": 14,
  "14:12:00": 8,
  "14:21:00": 9,
  "14:30:00": 10,
  "14:39:00": 11,
  "14:48:00": 13,
  "14:57:00": 1,

  "15:06:00": 2,
  "15:15:00": 3,
  "15:24:00": 4,
  "15:33:00": 5,
  "15:43:00": 6,
  "15:52:00": 12,

  "16:02:00": 7,
  "16:11:00": 14,
  "16:21:00": 8,
  "16:30:00": 9,
  "16:39:00": 10,
  "16:49:00": 11,
  "16:58:00": 13,

  "17:07:00": 1,
  "17:17:00": 2,
  "17:26:00": 3,
  "17:36:00": 4,
  "17:46:00": 5,
  "17:56:00": 6,

  "18:04:00": 12,
  "18:06:00": 7,
  "18:16:00": 14,
  "18:26:00": 8,
  "18:35:00": 9,
  "18:45:00": 10,
  "18:55:00": 11,

  "19:05:00": 13,
  "19:16:00": 1,
  "19:27:00": 2,
  "19:39:00": 4,
  "19:50:00": 5,

  "20:01:00": 6,
  "20:10:00": 14,
  "20:13:00": 7,
  "20:24:00": 8,
  "20:35:00": 9,
  "20:47:00": 11,
  "20:58:00": 13,

  "21:09:00": 1,
  "21:21:00": 2,
  "21:32:00": 4,
  "21:34:00": 5,
  "21:43:00": 6,
  "21:55:00": 7,

  "22:06:00": 8,
  "22:17:00": 9,
  "22:29:00": 11,
  "22:41:00": 13,
  "22:53:00": 1,

  "23:10:00": 2,
  "23:13:00": 4,
  "23:30:00": 6,
  "23:33:00": 7,
  "23:44:00": 8,
  "23:55:00": 9
}
;
const URLS = [
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=21224", timetable: timetableMapA },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=20368", timetable: timetableMapA },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=21216", timetable: timetableMapA },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=20235", timetable: timetableMapB },
    { url: "https://beograd.prometko.si/api/stations/arrivals?station=21217", timetable: timetableMapB },
	{ url: "https://beograd.prometko.si/api/stations/arrivals?station=20406", timetable: timetableMapB },
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
                .filter((bus) => bus.lc === "83")
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
