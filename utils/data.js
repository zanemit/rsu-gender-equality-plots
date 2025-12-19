const LABELS = {
    lv:{
        groupNames: {
            all_staff: "Visi darbinieki",
            research: "Zinātnes personāls",
            academic: "Akadēmiskais personāls",
            managers: "Vadītāji",
            home_applicants: "Pašmāju reflektanti",
            all_graduates: "Visi absolventi",
            all_students: "Visi jaunuzņemtie studenti", 
        },
        groupNamesPossessive: {
            all_staff: "visu darbinieku",
            research: "zinātnes personāla",
            academic: "akadēmiskā personāla",
            managers: "vadītāju",
            home_applicants: "pašmāju reflektantu",
            all_graduates: "visu absolventu",
            all_students: "visu jaunuzņemto studentu",
        }
    },
    en:{
        groupNames: {
            all_staff: "All staff",
            research: "Research staff",
            academic: "Academic staff",
            managers: "Managers",
            home_applicants: "Home applicants",
            all_graduates: "All graduates",
            all_students: "All new students",
        },
        groupNamesPossessive: {
            all_staff: "all staff",
            research: "research staff",
            academic: "academic staff",
            managers: "managers",
            home_applicants: "home applicants",
            all_graduates: "all graduates",
            all_students: "all new students",
        }
    }
}

const TEXTS = {
  lv: {
    titlePrefix: "Sieviešu %",
    titleSuffix: "vidū",
    hoverWomen: "sievietes",
    femaleHoverName: "sievietes",
    maleHoverName: "vīrieši",
    plotTitle: "Vidējās algas sadalījums pa dzimumiem",
    ylabel: "Alga",
  },
  en: {
    titlePrefix: "% of women among",
    titleSuffix: "",
    hoverWomen: "women",
    femaleHoverName: "women",
    maleHoverName: "men",
    plotTitle: "Average salaries by gender",
    ylabel: "Salary",
  }
};

const applicantsByGroup = { 
    home_applicants: { x: [2022,2023,2024], y: [81,80,77], total: [3042,3092,3584]},
  };

const employeesByGroup = {
          all_staff: { 
            x: [2022,2023,2024], 
            y: [72,73,73], 
            total: [1589,1637,1641], 
            },
          research: {
            x: [2022,2023,2024], 
            y: [71,67,68], 
            total: [199,180,175]
            },
          academic: {
            x: [2022,2023,2024], 
            y: [68,68,67], 
            total: [558,620,556], 
            },
          managers: {
            x: [2022,2023,2024], 
            y: [71,73,72], 
            total: [62,66,76]
            }
      };

const graduatesByGroup = {
        all_graduates: { x: [2022,2023,2024], y: [76,78,77], total: [1391,1555,1452]}
    };

const studentsByGroup = {
        all_students: { x: [2022,2023,2024], y: [75,77,75], total: [1144,1092,1137]}
    };

const payByGroup = {
        managers: {x: [2022,2023,2024], 
             female: [1333.63,1422.71,1662.41], 
             male: [1337.33,1432.83,1668.55], 
             name: "Managers" }
        };

