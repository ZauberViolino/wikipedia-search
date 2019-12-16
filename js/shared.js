// Default array of languages for when the API is unreachable
// Generated using: var array = await getWikis(); console.log('Prefixes:', JSON.stringify(array[0])); console.log('Languages:', JSON.stringify(array[1]));
const defaultPrefixArray = [
  "aa",
  "ab",
  "ace",
  "ady",
  "af",
  "ak",
  "als",
  "am",
  "an",
  "ang",
  "ar",
  "arc",
  "arz",
  "as",
  "ast",
  "atj",
  "av",
  "ay",
  "az",
  "azb",
  "ba",
  "ban",
  "bar",
  "bat-smg",
  "bcl",
  "be",
  "be-x-old",
  "bg",
  "bh",
  "bi",
  "bjn",
  "bm",
  "bn",
  "bo",
  "bpy",
  "br",
  "bs",
  "bug",
  "bxr",
  "ca",
  "cbk-zam",
  "cdo",
  "ce",
  "ceb",
  "ch",
  "cho",
  "chr",
  "chy",
  "ckb",
  "co",
  "cr",
  "crh",
  "cs",
  "csb",
  "cu",
  "cv",
  "cy",
  "da",
  "de",
  "din",
  "diq",
  "dsb",
  "dty",
  "dv",
  "dz",
  "ee",
  "el",
  "eml",
  "en",
  "eo",
  "es",
  "et",
  "eu",
  "ext",
  "fa",
  "ff",
  "fi",
  "fiu-vro",
  "fj",
  "fo",
  "fr",
  "frp",
  "frr",
  "fur",
  "fy",
  "ga",
  "gag",
  "gan",
  "gcr",
  "gd",
  "gl",
  "glk",
  "gn",
  "gom",
  "gor",
  "got",
  "gu",
  "gv",
  "ha",
  "hak",
  "haw",
  "he",
  "hi",
  "hif",
  "ho",
  "hr",
  "hsb",
  "ht",
  "hu",
  "hy",
  "hyw",
  "hz",
  "ia",
  "id",
  "ie",
  "ig",
  "ii",
  "ik",
  "ilo",
  "inh",
  "io",
  "is",
  "it",
  "iu",
  "ja",
  "jam",
  "jbo",
  "jv",
  "ka",
  "kaa",
  "kab",
  "kbd",
  "kbp",
  "kg",
  "ki",
  "kj",
  "kk",
  "kl",
  "km",
  "kn",
  "ko",
  "koi",
  "kr",
  "krc",
  "ks",
  "ksh",
  "ku",
  "kv",
  "kw",
  "ky",
  "la",
  "lad",
  "lb",
  "lbe",
  "lez",
  "lfn",
  "lg",
  "li",
  "lij",
  "lmo",
  "ln",
  "lo",
  "lrc",
  "lt",
  "ltg",
  "lv",
  "mai",
  "map-bms",
  "mdf",
  "mg",
  "mh",
  "mhr",
  "mi",
  "min",
  "mk",
  "ml",
  "mn",
  "mnw",
  "mo",
  "mr",
  "mrj",
  "ms",
  "mt",
  "mus",
  "mwl",
  "my",
  "myv",
  "mzn",
  "na",
  "nah",
  "nap",
  "nds",
  "nds-nl",
  "ne",
  "new",
  "ng",
  "nl",
  "nn",
  "no",
  "nov",
  "nqo",
  "nrm",
  "nso",
  "nv",
  "ny",
  "oc",
  "olo",
  "om",
  "or",
  "os",
  "pa",
  "pag",
  "pam",
  "pap",
  "pcd",
  "pdc",
  "pfl",
  "pi",
  "pih",
  "pl",
  "pms",
  "pnb",
  "pnt",
  "ps",
  "pt",
  "qu",
  "rm",
  "rmy",
  "rn",
  "ro",
  "roa-rup",
  "roa-tara",
  "ru",
  "rue",
  "rw",
  "sa",
  "sah",
  "sat",
  "sc",
  "scn",
  "sco",
  "sd",
  "se",
  "sg",
  "sh",
  "shn",
  "si",
  "simple",
  "sk",
  "sl",
  "sm",
  "sn",
  "so",
  "sq",
  "sr",
  "srn",
  "ss",
  "st",
  "stq",
  "su",
  "sv",
  "sw",
  "szl",
  "szy",
  "ta",
  "tcy",
  "te",
  "tet",
  "tg",
  "th",
  "ti",
  "tk",
  "tl",
  "tn",
  "to",
  "tpi",
  "tr",
  "ts",
  "tt",
  "tum",
  "tw",
  "ty",
  "tyv",
  "udm",
  "ug",
  "uk",
  "ur",
  "uz",
  "ve",
  "vec",
  "vep",
  "vi",
  "vls",
  "vo",
  "wa",
  "war",
  "wo",
  "wuu",
  "xal",
  "xh",
  "xmf",
  "yi",
  "yo",
  "yue",
  "za",
  "zea",
  "zh",
  "zh-classical",
  "zh-min-nan",
  "zh-yue",
  "zu",
  "nb",
  "zh-cn",
  "zh-tw",
  "nan",
  "vro",
  "lzh",
  "rup",
  "gsw",
  "be-tarask",
  "sgs",
  "egl"
]

const defaultLangArray = [
  "Qafár af",
  "Аҧсшәа",
  "Acèh",
  "адыгабзэ",
  "Afrikaans",
  "Akan",
  "Alemannisch",
  "አማርኛ",
  "aragonés",
  "Ænglisc",
  "العربية",
  "ܐܪܡܝܐ",
  "مصرى",
  "অসমীয়া",
  "asturianu",
  "Atikamekw",
  "авар",
  "Aymar aru",
  "azərbaycanca",
  "تۆرکجه",
  "башҡортса",
  "Bali",
  "Boarisch",
  "žemaitėška",
  "Bikol Central",
  "беларуская",
  "беларуская (тарашкевіца)‎",
  "български",
  "भोजपुरी",
  "Bislama",
  "Banjar",
  "bamanankan",
  "বাংলা",
  "བོད་ཡིག",
  "বিষ্ণুপ্রিয়া মণিপুরী",
  "brezhoneg",
  "bosanski",
  "ᨅᨔ ᨕᨘᨁᨗ",
  "буряад",
  "català",
  "Chavacano de Zamboanga",
  "Mìng-dĕ̤ng-ngṳ̄",
  "нохчийн",
  "Cebuano",
  "Chamoru",
  "Choctaw",
  "ᏣᎳᎩ",
  "Tsetsêhestâhese",
  "کوردی",
  "corsu",
  "Nēhiyawēwin / ᓀᐦᐃᔭᐍᐏᐣ",
  "qırımtatarca",
  "čeština",
  "kaszëbsczi",
  "словѣньскъ / ⰔⰎⰑⰂⰡⰐⰠⰔⰍⰟ",
  "Чӑвашла",
  "Cymraeg",
  "dansk",
  "Deutsch",
  "Thuɔŋjäŋ",
  "Zazaki",
  "dolnoserbski",
  "डोटेली",
  "ދިވެހިބަސް",
  "ཇོང་ཁ",
  "eʋegbe",
  "Ελληνικά",
  "emiliàn e rumagnòl",
  "English",
  "Esperanto",
  "español",
  "eesti",
  "euskara",
  "estremeñu",
  "فارسی",
  "Fulfulde",
  "suomi",
  "Võro",
  "Na Vosa Vakaviti",
  "føroyskt",
  "français",
  "arpetan",
  "Nordfriisk",
  "furlan",
  "Frysk",
  "Gaeilge",
  "Gagauz",
  "贛語",
  "kriyòl gwiyannen",
  "Gàidhlig",
  "galego",
  "گیلکی",
  "Avañe'ẽ",
  "गोंयची कोंकणी / Gõychi Konknni",
  "Bahasa Hulontalo",
  "𐌲𐌿𐍄𐌹𐍃𐌺",
  "ગુજરાતી",
  "Gaelg",
  "Hausa",
  "客家語/Hak-kâ-ngî",
  "Hawaiʻi",
  "עברית",
  "हिन्दी",
  "Fiji Hindi",
  "Hiri Motu",
  "hrvatski",
  "hornjoserbsce",
  "Kreyòl ayisyen",
  "magyar",
  "հայերեն",
  "Արեւմտահայերէն",
  "Otsiherero",
  "interlingua",
  "Bahasa Indonesia",
  "Interlingue",
  "Igbo",
  "ꆇꉙ",
  "Iñupiak",
  "Ilokano",
  "ГӀалгӀай",
  "Ido",
  "íslenska",
  "italiano",
  "ᐃᓄᒃᑎᑐᑦ/inuktitut",
  "日本語",
  "Patois",
  "la .lojban.",
  "Jawa",
  "ქართული",
  "Qaraqalpaqsha",
  "Taqbaylit",
  "Адыгэбзэ",
  "Kabɩyɛ",
  "Kongo",
  "Gĩkũyũ",
  "Kwanyama",
  "қазақша",
  "kalaallisut",
  "ភាសាខ្មែរ",
  "ಕನ್ನಡ",
  "한국어",
  "Перем Коми",
  "Kanuri",
  "къарачай-малкъар",
  "कॉशुर / کٲشُر",
  "Ripoarisch",
  "kurdî",
  "коми",
  "kernowek",
  "Кыргызча",
  "Latina",
  "Ladino",
  "Lëtzebuergesch",
  "лакку",
  "лезги",
  "Lingua Franca Nova",
  "Luganda",
  "Limburgs",
  "Ligure",
  "lumbaart",
  "lingála",
  "ລາວ",
  "لۊری شومالی",
  "lietuvių",
  "latgaļu",
  "latviešu",
  "मैथिली",
  "Basa Banyumasan",
  "мокшень",
  "Malagasy",
  "Ebon",
  "олык марий",
  "Māori",
  "Minangkabau",
  "македонски",
  "മലയാളം",
  "монгол",
  "ဘာသာ မန်",
  "молдовеняскэ",
  "मराठी",
  "кырык мары",
  "Bahasa Melayu",
  "Malti",
  "Mvskoke",
  "Mirandés",
  "မြန်မာဘာသာ",
  "эрзянь",
  "مازِرونی",
  "Dorerin Naoero",
  "Nāhuatl",
  "Napulitano",
  "Plattdüütsch",
  "Nedersaksies",
  "नेपाली",
  "नेपाल भाषा",
  "Oshiwambo",
  "Nederlands",
  "norsk nynorsk",
  "norsk",
  "Novial",
  "ߒߞߏ",
  "Nouormand",
  "Sesotho sa Leboa",
  "Diné bizaad",
  "Chi-Chewa",
  "occitan",
  "Livvinkarjala",
  "Oromoo",
  "ଓଡ଼ିଆ",
  "Ирон",
  "ਪੰਜਾਬੀ",
  "Pangasinan",
  "Kapampangan",
  "Papiamentu",
  "Picard",
  "Deitsch",
  "Pälzisch",
  "पालि",
  "Norfuk / Pitkern",
  "polski",
  "Piemontèis",
  "پنجابی",
  "Ποντιακά",
  "پښتو",
  "português",
  "Runa Simi",
  "rumantsch",
  "romani čhib",
  "Kirundi",
  "română",
  "armãneashti",
  "tarandíne",
  "русский",
  "русиньскый",
  "Kinyarwanda",
  "संस्कृतम्",
  "саха тыла",
  "ᱥᱟᱱᱛᱟᱲᱤ",
  "sardu",
  "sicilianu",
  "Scots",
  "سنڌي",
  "davvisámegiella",
  "Sängö",
  "srpskohrvatski / српскохрватски",
  "ၽႃႇသႃႇတႆး ",
  "සිංහල",
  "Simple English",
  "slovenčina",
  "slovenščina",
  "Gagana Samoa",
  "chiShona",
  "Soomaaliga",
  "shqip",
  "српски / srpski",
  "Sranantongo",
  "SiSwati",
  "Sesotho",
  "Seeltersk",
  "Sunda",
  "svenska",
  "Kiswahili",
  "ślůnski",
  "Sakizaya",
  "தமிழ்",
  "ತುಳು",
  "తెలుగు",
  "tetun",
  "тоҷикӣ",
  "ไทย",
  "ትግርኛ",
  "Türkmençe",
  "Tagalog",
  "Setswana",
  "lea faka-Tonga",
  "Tok Pisin",
  "Türkçe",
  "Xitsonga",
  "татарча/tatarça",
  "chiTumbuka",
  "Twi",
  "reo tahiti",
  "тыва дыл",
  "удмурт",
  "ئۇيغۇرچە / Uyghurche",
  "українська",
  "اردو",
  "oʻzbekcha/ўзбекча",
  "Tshivenda",
  "vèneto",
  "vepsän kel’",
  "Tiếng Việt",
  "West-Vlams",
  "Volapük",
  "walon",
  "Winaray",
  "Wolof",
  "吴语",
  "хальмг",
  "isiXhosa",
  "მარგალური",
  "ייִדיש",
  "Yorùbá",
  "粵語",
  "Vahcuengh",
  "Zeêuws",
  "中文",
  "文言",
  "Bân-lâm-gú",
  "粵語",
  "isiZulu",
  "norsk bokmål",
  "中文（中国大陆）‎",
  "中文（台灣）‎",
  "Bân-lâm-gú",
  "Võro",
  "文言",
  "armãneashti",
  "Alemannisch",
  "беларуская (тарашкевіца)‎",
  "žemaitėška",
  "Emiliàn"
]

// Function for obtaining updated list of Wikipedias
async function getWikis() {
    // Download list of Wikis
    try {
        const response = await fetch('https://sv.wikipedia.org/w/api.php?action=query&meta=siteinfo&siprop=interwikimap&sifilteriw=local&format=json', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            console.log('Could not obtain data from Wikipedia API.')
            return defaultWikiArray
        }
        const json = await response.json()
        // Parse list
        const wikiList = json.query.interwikimap
        console.log('Wiki list downloaded, contains ' + wikiList.length + ' items.')
        // Create new arrays with only the active language wikis
        var wikiPrefixArray = []
        var wikiLangArray = []
        for (i in wikiList) {
            if (wikiList[i].language) {
                wikiPrefixArray.push(wikiList[i].prefix)
                wikiLangArray.push(wikiList[i].language)
            }
        }
        // Save to chrome.storage for Omnibox use
        chrome.storage.local.set({
            wikiPrefixArray: wikiPrefixArray,
            wikiLangArray: wikiLangArray
        }, function() {
            return [wikiPrefixArray, wikiLangArray]
        })
    } catch (error) {
        console.log('Could not obtain data from Wikipedia API: ' + error)
        chrome.storage.local.set({
            wikiPrefixArray: defaultPrefixArray,
            wikiLangArray: defaultLangArray
        }, function() {
            return [defaultPrefixArray, defaultLangArray]
        })
    }
}

// Function for detecting system language and setting it to the default search language
function resetToSystemLanguage() {
    var lang = navigator.languages[0]
    var newLang = ''
	// Cut off the localization part if it exists (e.g. en-US becomes en), to match with Wikipedia's format
	var n = lang.indexOf('-')
	lang = lang.substring(0, n != -1 ? n : lang.length)
	// Check if the language has a Wikipedia
	if (defaultPrefixArray.includes(lang)) {
        console.log("Language auto-detected as '" + lang + "' (" + defaultLangArray[defaultPrefixArray.indexOf(lang)] + ")")
        newLang = lang
	} else {
		// Set it to English as default
        console.log("Could not auto-detect language, defaulting to 'en' (English)")
        newLang = 'en'
    }
    // Update language setting
    chrome.storage.local.set({
        userLanguage: newLang
    })
    // Return new language
    return newLang
}