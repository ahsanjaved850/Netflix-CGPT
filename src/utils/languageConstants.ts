const lang = {
    en: {
        search: "Search",
        searchPlaceholder: "What would you like to watch..!"
    },
    spanish: {
        search: "buscar",
        searchPlaceholder: "¡Qué te gustaría ver...!"
    },
    urdu: {
        search: "تلاش کریں",
        searchPlaceholder: "!..آپ کیا دیکھنا پسند کریں گے"
    }
}

export type LangKey = keyof typeof lang;
export default lang;