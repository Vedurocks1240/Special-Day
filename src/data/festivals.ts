export type ThemeKey =
  | "diwali"
  | "holi"
  | "national"
  | "christmas"
  | "eid"
  | "onam"
  | "ganesh"
  | "navratri"
  | "raksha"
  | "janmashtami"
  | "sikh"
  | "shivratri"
  | "spring"
  | "modern"
  | "solstice"
  | "jayanti"
  | "default";

export interface SpecialDay {
  date: string; // YYYY-MM-DD
  title: string;
  subtitle?: string;
  theme: ThemeKey;
}

// Comprehensive list of Indian festivals, national holidays, jayantis and
// observances from 1 Aug 2026 to 31 Dec 2027.
export const specialDays: SpecialDay[] = [
  // ---------------- 2026 ----------------
  { date: "2026-08-02", title: "Friendship Day", subtitle: "Celebrating the bonds that hold us together", theme: "modern" },
  { date: "2026-08-15", title: "Independence Day", subtitle: "80th Anniversary of India's Freedom", theme: "national" },
  { date: "2026-08-19", title: "Tulsidas Jayanti", subtitle: "Birth anniversary of the poet-saint", theme: "jayanti" },
  { date: "2026-08-26", title: "Onam", subtitle: "Kerala's harvest festival welcoming King Mahabali", theme: "onam" },
  { date: "2026-08-26", title: "Eid-e-Milad", subtitle: "Milad un-Nabi, birthday of Prophet Muhammad", theme: "eid" },
  { date: "2026-08-28", title: "Raksha Bandhan", subtitle: "The thread of sibling love", theme: "raksha" },
  { date: "2026-09-04", title: "Krishna Janmashtami", subtitle: "Celebrating the birth of Lord Krishna", theme: "janmashtami" },
  { date: "2026-09-05", title: "Teachers' Day", subtitle: "Honouring Dr. Sarvepalli Radhakrishnan", theme: "modern" },
  { date: "2026-09-14", title: "Ganesh Chaturthi", subtitle: "Welcoming Lord Ganesha home", theme: "ganesh" },
  { date: "2026-09-14", title: "Hindi Diwas", subtitle: "Celebrating the Hindi language", theme: "modern" },
  { date: "2026-09-15", title: "Engineer's Day", subtitle: "Birth anniversary of Sir M. Visvesvaraya", theme: "modern" },
  { date: "2026-09-23", title: "Autumnal Equinox", subtitle: "Day and night stand equal", theme: "solstice" },
  { date: "2026-10-02", title: "Gandhi Jayanti", subtitle: "Birth anniversary of the Father of the Nation", theme: "national" },
  { date: "2026-10-11", title: "Navratri Begins", subtitle: "Nine nights honouring the Goddess", theme: "navratri" },
  { date: "2026-10-19", title: "Durga Ashtami", subtitle: "The eighth night of Navratri", theme: "navratri" },
  { date: "2026-10-19", title: "Maha Navami", subtitle: "The ninth night of Navratri", theme: "navratri" },
  { date: "2026-10-20", title: "Dussehra", subtitle: "Vijayadashami — the triumph of good over evil", theme: "navratri" },
  { date: "2026-10-21", title: "Madhvacharya Jayanti", subtitle: "Birth anniversary of the Vedanta philosopher", theme: "jayanti" },
  { date: "2026-10-26", title: "Valmiki Jayanti", subtitle: "Birth anniversary of the sage-poet of the Ramayana", theme: "jayanti" },
  { date: "2026-10-29", title: "Karwa Chauth", subtitle: "A fast for love, kept beneath the moon", theme: "raksha" },
  { date: "2026-11-08", title: "Diwali", subtitle: "The Festival of Lights — Lakshmi Puja", theme: "diwali" },
  { date: "2026-11-10", title: "Govardhan Puja", subtitle: "Honouring Govardhan Hill", theme: "diwali" },
  { date: "2026-11-11", title: "Bhai Dooj", subtitle: "Celebrating the bond of siblings", theme: "raksha" },
  { date: "2026-11-14", title: "Children's Day", subtitle: "Birth anniversary of Pandit Jawaharlal Nehru", theme: "modern" },
  { date: "2026-11-15", title: "Chhath Puja", subtitle: "Worship of the Sun God", theme: "diwali" },
  { date: "2026-11-24", title: "Guru Nanak Jayanti", subtitle: "Birth anniversary of the founder of Sikhism", theme: "sikh" },
  { date: "2026-12-01", title: "World AIDS Day", subtitle: "Global solidarity in the fight against HIV/AIDS", theme: "modern" },
  { date: "2026-12-22", title: "Winter Solstice", subtitle: "The shortest day of the year", theme: "solstice" },
  { date: "2026-12-25", title: "Christmas", subtitle: "Celebrating the birth of Jesus Christ", theme: "christmas" },
  { date: "2026-12-31", title: "New Year's Eve", subtitle: "The final glow of the year", theme: "modern" },

  // ---------------- 2027 ----------------
  { date: "2027-01-01", title: "New Year's Day", subtitle: "A fresh page begins", theme: "modern" },
  { date: "2027-01-12", title: "National Youth Day", subtitle: "Birth anniversary of Swami Vivekananda", theme: "jayanti" },
  { date: "2027-01-14", title: "Lohri", subtitle: "The bonfire festival of Punjab", theme: "national" },
  { date: "2027-01-15", title: "Makar Sankranti", subtitle: "The Sun's journey into Makara — also Pongal", theme: "spring" },
  { date: "2027-01-15", title: "Guru Gobind Singh Jayanti", subtitle: "Birth anniversary of the tenth Sikh Guru", theme: "sikh" },
  { date: "2027-01-23", title: "Subhas Chandra Bose Jayanti", subtitle: "Parakram Diwas", theme: "national" },
  { date: "2027-01-26", title: "Republic Day", subtitle: "Celebrating the Constitution of India", theme: "national" },
  { date: "2027-01-30", title: "Gandhi Punyatithi", subtitle: "Martyrs' Day, remembering Mahatma Gandhi", theme: "national" },
  { date: "2027-02-04", title: "World Cancer Day", subtitle: "Uniting in the fight against cancer", theme: "modern" },
  { date: "2027-02-11", title: "Vasant Panchami", subtitle: "Welcoming spring, honouring Goddess Saraswati", theme: "spring" },
  { date: "2027-02-14", title: "Valentine's Day", subtitle: "A day for love", theme: "modern" },
  { date: "2027-02-19", title: "Chhatrapati Shivaji Maharaj Jayanti", subtitle: "Birth anniversary of the Maratha king", theme: "jayanti" },
  { date: "2027-02-20", title: "Guru Ravidas Jayanti", subtitle: "Birth anniversary of the saint-poet", theme: "jayanti" },
  { date: "2027-03-06", title: "Maha Shivaratri", subtitle: "The great night of Lord Shiva", theme: "shivratri" },
  { date: "2027-03-08", title: "International Women's Day", subtitle: "Celebrating women everywhere", theme: "modern" },
  { date: "2027-03-10", title: "Eid al-Fitr", subtitle: "Celebrating the end of Ramadan", theme: "eid" },
  { date: "2027-03-21", title: "Holika Dahan", subtitle: "The bonfire on the eve of Holi", theme: "holi" },
  { date: "2027-03-22", title: "Holi", subtitle: "The Festival of Colours", theme: "holi" },
  { date: "2027-03-23", title: "Shaheed Diwas", subtitle: "Remembering Bhagat Singh, Rajguru and Sukhdev", theme: "national" },
  { date: "2027-03-26", title: "Good Friday", subtitle: "Remembering the crucifixion of Jesus Christ", theme: "christmas" },
  { date: "2027-03-28", title: "Easter", subtitle: "Celebrating the resurrection of Jesus Christ", theme: "christmas" },
  { date: "2027-04-07", title: "Ugadi & Gudi Padwa", subtitle: "New Year for Telugu, Kannada and Marathi calendars", theme: "spring" },
  { date: "2027-04-14", title: "Ambedkar Jayanti", subtitle: "Birth anniversary of Dr. B. R. Ambedkar", theme: "national" },
  { date: "2027-04-14", title: "Baisakhi", subtitle: "Harvest festival and Punjabi New Year", theme: "spring" },
  { date: "2027-04-15", title: "Rama Navami", subtitle: "Celebrating the birth of Lord Rama", theme: "navratri" },
  { date: "2027-04-19", title: "Mahavir Jayanti", subtitle: "Birth anniversary of Lord Mahavira", theme: "jayanti" },
  { date: "2027-04-22", title: "Earth Day", subtitle: "A day for our planet", theme: "modern" },
  { date: "2027-05-01", title: "Labour Day", subtitle: "Honouring workers everywhere", theme: "modern" },
  { date: "2027-05-09", title: "Mother's Day", subtitle: "Celebrating mothers everywhere", theme: "modern" },
  { date: "2027-05-17", title: "Eid al-Adha", subtitle: "Bakrid — the festival of sacrifice", theme: "eid" },
  { date: "2027-05-20", title: "Buddha Purnima", subtitle: "Celebrating the birth of Gautama Buddha", theme: "spring" },
  { date: "2027-05-31", title: "World No Tobacco Day", subtitle: "A healthier world, one breath at a time", theme: "modern" },
  { date: "2027-06-05", title: "World Environment Day", subtitle: "Caring for our shared home", theme: "modern" },
  { date: "2027-06-06", title: "Islamic New Year", subtitle: "Al-Hijra — the first day of Muharram", theme: "eid" },
  { date: "2027-06-15", title: "Muharram", subtitle: "Day of Ashura", theme: "eid" },
  { date: "2027-06-20", title: "Father's Day", subtitle: "Celebrating fathers everywhere", theme: "modern" },
  { date: "2027-06-21", title: "International Yoga Day", subtitle: "Uniting the world in wellness", theme: "modern" },
  { date: "2027-07-05", title: "Jagannath Rath Yatra", subtitle: "The great chariot festival of Puri", theme: "navratri" },
  { date: "2027-07-18", title: "Guru Purnima", subtitle: "Honouring teachers and guides", theme: "spring" },
  { date: "2027-08-01", title: "Friendship Day", subtitle: "Celebrating the bonds that hold us together", theme: "modern" },
  { date: "2027-08-15", title: "Independence Day", subtitle: "81st Anniversary of India's Freedom", theme: "national" },
  { date: "2027-08-15", title: "Eid-e-Milad", subtitle: "Milad un-Nabi, birthday of Prophet Muhammad", theme: "eid" },
  { date: "2027-08-17", title: "Raksha Bandhan", subtitle: "The thread of sibling love", theme: "raksha" },
  { date: "2027-08-25", title: "Krishna Janmashtami", subtitle: "Celebrating the birth of Lord Krishna", theme: "janmashtami" },
  { date: "2027-09-04", title: "Ganesh Chaturthi", subtitle: "Welcoming Lord Ganesha home", theme: "ganesh" },
  { date: "2027-09-05", title: "Teachers' Day", subtitle: "Honouring Dr. Sarvepalli Radhakrishnan", theme: "modern" },
  { date: "2027-09-12", title: "Onam", subtitle: "Kerala's harvest festival welcoming King Mahabali", theme: "onam" },
  { date: "2027-09-14", title: "Hindi Diwas", subtitle: "Celebrating the Hindi language", theme: "modern" },
  { date: "2027-09-15", title: "Engineer's Day", subtitle: "Birth anniversary of Sir M. Visvesvaraya", theme: "modern" },
  { date: "2027-09-23", title: "Autumnal Equinox", subtitle: "Day and night stand equal", theme: "solstice" },
  { date: "2027-09-30", title: "Navratri Begins", subtitle: "Nine nights honouring the Goddess", theme: "navratri" },
  { date: "2027-10-02", title: "Gandhi Jayanti", subtitle: "Birth anniversary of the Father of the Nation", theme: "national" },
  { date: "2027-10-07", title: "Durga Ashtami", subtitle: "The eighth night of Navratri", theme: "navratri" },
  { date: "2027-10-08", title: "Maha Navami", subtitle: "The ninth night of Navratri", theme: "navratri" },
  { date: "2027-10-09", title: "Dussehra", subtitle: "Vijayadashami — the triumph of good over evil", theme: "navratri" },
  { date: "2027-10-15", title: "Valmiki Jayanti", subtitle: "Birth anniversary of the sage-poet of the Ramayana", theme: "jayanti" },
  { date: "2027-10-18", title: "Karwa Chauth", subtitle: "A fast for love, kept beneath the moon", theme: "raksha" },
  { date: "2027-10-28", title: "Narak Chaturdashi", subtitle: "Choti Diwali — the eve of Diwali", theme: "diwali" },
  { date: "2027-10-29", title: "Diwali", subtitle: "The Festival of Lights — Lakshmi Puja", theme: "diwali" },
  { date: "2027-10-30", title: "Govardhan Puja", subtitle: "Honouring Govardhan Hill", theme: "diwali" },
  { date: "2027-10-31", title: "Bhai Dooj", subtitle: "Celebrating the bond of siblings", theme: "raksha" },
  { date: "2027-11-04", title: "Chhath Puja", subtitle: "Worship of the Sun God", theme: "diwali" },
  { date: "2027-11-14", title: "Guru Nanak Jayanti", subtitle: "Birth anniversary of the founder of Sikhism", theme: "sikh" },
  { date: "2027-11-14", title: "Children's Day", subtitle: "Birth anniversary of Pandit Jawaharlal Nehru", theme: "modern" },
  { date: "2027-12-01", title: "World AIDS Day", subtitle: "Global solidarity in the fight against HIV/AIDS", theme: "modern" },
  { date: "2027-12-22", title: "Winter Solstice", subtitle: "The shortest day of the year", theme: "solstice" },
  { date: "2027-12-25", title: "Christmas", subtitle: "Celebrating the birth of Jesus Christ", theme: "christmas" },
  { date: "2027-12-31", title: "New Year's Eve", subtitle: "The final glow of the year", theme: "modern" },
];

export function findSpecialDay(dateStr: string): SpecialDay | undefined {
  return specialDays.find((d) => d.date === dateStr);
}

export function toDateKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export const RANGE_START = "2026-08-01";
export const RANGE_END = "2027-12-31";
