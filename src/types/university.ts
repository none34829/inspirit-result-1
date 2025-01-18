export interface University {
  name: string;
  country: string;
  logo: string;
  graduatesByYear: {
    [key: number]: number;  // key is the year (2026-2028), value is number of graduates
  };
}

export const universities: University[] = [
  {
    "name": "Adrian College",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/0/0f/Adrian_College_seal.svg",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "American University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/A/american-university-washington-d-c-logo-0DF38787E6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "American University of Beirut",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW2okutu07AxiAjnKVyFplnE6tPUeQX_1nf8sU6MVZkzIZqUi7iOCEE5MmilBykiibT5s&usqp=CAU",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "American University of Sharjah",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/c/c8/American_University_of_Sharjah_%28emblem%29.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Amherst College",
    "country": "United States",
    "logo": "https://www.amherst.edu/system/files/media/Amherst-College-seal-purple-stomp-575px.webp?__=1737120625",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Appalachian State University",
    "country": "United States",
    "logo": "https://uc.appstate.edu/sites/default/files/logos/app-state-block-a-logo-600px.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Arizona State University",
    "country": "United States",
    "logo": "https://aci.az.gov/sites/default/files/media/ASU-logo.png",
    "graduatesByYear": {
      "2026": 7,
      "2027": 8,
      "2028": 4
    }
  },
  {
    "name": "Ashoka University",
    "country": "India",
    "logo": "https://we-recycle.org/wp-content/uploads/2014/03/ashoka-university-logo.png?w=269",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "Ateneo de Manila University",
    "country": "Philippines",
    "logo": "https://upload.wikimedia.org/wikipedia/en/6/6c/Ateneo_de_Manila_University_seal.svg",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Babson College",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/93/Babson-logo.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Barnard College",
    "country": "United States",
    "logo": "https://cdn.brandfetch.io/idxFLbiQ_r/w/400/h/400/theme/dark/icon.jpeg?c=1bfwsmEH20zzEfSNTed",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Baylor University",
    "country": "United States",
    "logo": "https://logos-world.net/wp-content/uploads/2022/01/Baylor-University-Logo.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Bentley University",
    "country": "United States",
    "logo": "https://marvel-b1-cdn.bc0a.com/f00000000299134/d2f5upgbvkx8pz.cloudfront.net/sites/default/files/inline-images/Bentley_Logo_Shield_Only_Blue.jpg?VersionId=NLkoz0Mrbee.rdXjIE1ozFjjoMIsQzk8",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Bilkent University",
    "country": "Türkiye",
    "logo": "https://seeklogo.com/images/B/bilkent-universitesi-logo-DDB94EAA5F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Binghamton University",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_lLFZff1GiNbl72-gyOj94_uCdJlaByW9YOKacc&usqp=CAE&s",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "Birla Institute of Technology and Science, Pilani",
    "country": "India",
    "logo": "https://www.bits-pilani.ac.in/wp-content/uploads/bits-pillani-logo.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Bocconi University",
    "country": "Italy",
    "logo": "https://population-europe.eu/files/styles/pe_content_xl/public/media-images/bocconi.png?itok=4klR06Kk",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Borough of Manhattan Community College",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI-sWoe0RCOifszU-QOtSHILlZsfEPUVOuuDpz0A&usqp=CAE&s",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Boston College",
    "country": "United States",
    "logo": "https://seeklogo.com/images/B/boston-college-eagles-logo-1EC79BE5C6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 2
    }
  },
  {
    "name": "Boston University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/2000x930/2c5d84220e/boston-university.png",
    "graduatesByYear": {
      "2026": 8,
      "2027": 11,
      "2028": 10
    }
  },
  {
    "name": "Bowdoin College",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/45/1/bowdoin-athletics-logo-png_seeklogo-451559.png?v=1957662054119921704",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Brandeis University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/44/2/brandeis-university-logo-png_seeklogo-440750.png?v=1957812888389756272",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Brigham Young University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/B/byu-brigham-young-university-logo-5FA8255E87-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Brown University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/209x199/7c872473dd/brown.png",
    "graduatesByYear": {
      "2026": 8,
      "2027": 12,
      "2028": 7
    }
  },
  {
    "name": "Cal Poly Humboldt",
    "country": "United States",
    "logo": "https://seeklogo.com/images/C/cal-poly-humboldt-lumberjacks-logo-BF87128DA1-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "California Baptist University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/52/2/california-baptist-university-logo-png_seeklogo-529115.png?v=1957856498976257528",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "California Polytechnic State University, San Luis Obispo",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/d/d9/CalPoly_Seal.svg",
    "graduatesByYear": {
      "2026": 13,
      "2027": 4,
      "2028": 3
    }
  },
  {
    "name": "California State Polytechnic University-Pomona",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7y1zsj0dCDI6ipIIba8RKBNBghJg_gH6TIJ0TwQ&usqp=CAE&s",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "California State University",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/c/cc/Seal_of_the_California_State_University.svg",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "California State University, Fresno",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTPSHlqbR3L1rgpoOLD-ZiKGCeMWrjCajVxAgQRY&usqp=CAE&s",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Caltech",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/39/1/california-institute-of-technology-caltech-logo-png_seeklogo-397015.png?v=1957913605936163560",
    "graduatesByYear": {
      "2026": 4,
      "2027": 6,
      "2028": 0
    }
  },
  {
    "name": "Carleton College",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/51/2/carleton-college-logo-png_seeklogo-510927.png?v=1957770300430604888",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Carleton University",
    "country": "Canada",
    "logo": "https://images.seeklogo.com/logo-png/34/2/carleton-university-logo-png_seeklogo-347011.png?v=1957916249599747968",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Carnegie Mellon University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/C/carnegie-mellon-university-logo-389DF9E4D6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 18,
      "2027": 24,
      "2028": 18
    }
  },
  {
    "name": "Case Western Reserve University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/C/case-western-reserve-university-logo-04E1FDCD5C-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 7,
      "2027": 6,
      "2028": 2
    }
  },
  {
    "name": "Champlain College",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/b/b5/Champlain_College_seal.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Chapman University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/chapman-university-logo-png_seeklogo-487747.png?v=1957661700952947760",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "City, University of London",
    "country": "England",
    "logo": "https://seeklogo.com/images/C/city-university-of-london-logo-63A9D5FB68-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Clemson University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/28/2/clemson-university-logo-png_seeklogo-280726.png?v=1957909766223770496",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Colby College",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/49/2/colby-college-logo-png_seeklogo-495561.png?v=1957714878446517800",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Colgate University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/C/colgate-university-logo-BF43A8F835-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "Colorado School of Mines",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/49/2/colorado-school-of-mines-logo-png_seeklogo-493748.png?v=1957827530997566088",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Columbia University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/820x530/c2b5ed5878/columbia.png",
    "graduatesByYear": {
      "2026": 12,
      "2027": 11,
      "2028": 13
    }
  },
  {
    "name": "Comillas Pontifical University",
    "country": "Spain",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVI68-UoyKeQiuS1fxLncvdY5LiuEXzPdSLA&s",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Cornell University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/filters:format(webp)/f/112543/256x256/3c32249a6e/cornell.png",
    "graduatesByYear": {
      "2026": 29,
      "2027": 35,
      "2028": 25
    }
  },
  {
    "name": "Dalhousie University",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/D/dalhousie-university-logo-770F1DEE35-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Dartmouth College",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/200x200/3f26471d7f/dartmouth.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "Davidson College",
    "country": "United States",
    "logo": "https://seeklogo.com/images/D/davidson-college-logo-3179C66AA8-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Delft University of Technology",
    "country": "Netherlands",
    "logo": "https://lh3.googleusercontent.com/proxy/6NLeBmkhTQTwv6S0MENzT8rwafHjpvQA_KrD9dZCMln7bWNf2tz3CeLlXJ1ql5NFpZDD1YBeQxjTgWt9-73XZ1RGZMHKXedIxfTMWm2VkykPRQXtP1qyr7C99LhmjKL5LHPCD5USOrH7",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Denison University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/38/2/denison-university-logo-png_seeklogo-389543.png?v=1957826208646670576",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Drexel University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/D/drexel-university-logo-C946071C15-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Duke University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/D/duke-university-logo-DA37A55822-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 15,
      "2027": 22,
      "2028": 12
    }
  },
  {
    "name": "Durham University",
    "country": "England",
    "logo": "https://seeklogo.com/images/D/durham-university-logo-8FF79D2F0F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Egypt University of Informatics-EUI",
    "country": "Egypt",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Eindhoven University of Technology",
    "country": "Netherlands",
    "logo": "https://images.seeklogo.com/logo-png/50/2/eindhoven-university-of-technology-logo-png_seeklogo-507864.png?v=1957807101050258648",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Embry-Riddle Aeronautical University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/E/Embry-Riddle_Aeronautical_University-logo-99E965FDE5-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Emory University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/E/emory-university-logo-73A3D235A3-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "Esade",
    "country": "Spain",
    "logo": "https://images.seeklogo.com/logo-png/52/2/escola-superior-dadministracio-i-direccio-dempre-logo-png_seeklogo-521775.png?v=1957825952394327192",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Florida Agricultural and Mechanical University",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAND1KEWKf-jiAENKLw-cpAu7-UUaiBsmsiA&s",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Florida State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/F/florida-state-university-seal-logo-9927044077-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Fordham University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/F/fordham-university-logo-4E5471EE69-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "Georgetown University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/G/georgetown-university-logo-7CC01223FE-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 4,
      "2028": 3
    }
  },
  {
    "name": "Georgia Institute of Technology",
    "country": "United States",
    "logo": "https://seeklogo.com/images/G/georgia-institute-of-technology-logo-F41A09B859-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 16,
      "2027": 5,
      "2028": 3
    }
  },
  {
    "name": "Georgia State University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/38/2/georgia-state-university-logo-png_seeklogo-389561.png?v=1957915035977445480",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Gettysburg College",
    "country": "United States",
    "logo": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEBAVFhUXGRgZFxcXFRobFhkWFxYYFxgYGB4YHSghGB0nHRoYITEhJSkrLi4uHR8zODMtNygvLisBCgoKDg0OGhAQGy0lHyUwLS8tLystLS0vLS0vLS0tLy8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAIYBdwMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABLEAABAwIDBQUDBgoIBQUAAAABAAIDBBEFEiEGBzFBURMiYXGBMpGhFDVCc7GzFTRSVGJygpLC0RdDg5OissHSIyUzhMMkVXTh8P/EABkBAQADAQEAAAAAAAAAAAAAAAADBAUCAf/EADERAAICAQIEBQMDBAMBAAAAAAABAgMRBCESEzFRMjNBYXEUIoGRocEFQlLRI7HwYv/aAAwDAQACEQMRAD8AvFAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBrMX2gpKX8YqI4zxDS7vHyaNT7l3CuU/CjiVkY9WRmXenh17RieX9SI/xEKZaSz1wiF6qHpln2PehQf1kdREOr4Tb/CSj0k/TD/J6tTD1yjeYXtfh9RYRVcZceDS7K73OsSo5Uzj1RJG2EujN0JG3tcX42vrbqoiQ5IAgCAIAgCAIAgCAIAgCAIAgCAxsRrGwxvleHFrAXENaXOIHQDiV6ll4PG8LJVOPb3pdW0tN2f6U2rv3BoPeVfr0S6yf6FGesfSK/Ulu6vGqirpHy1MnaPEzmg5Wts0MYQLMAHElQaquMJ4ivQn01kpwzImSrFgIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICqd4W8pzHOpqB1nDSSbQ2PNsfjyLvd1V/T6XP3T/AEKN+px9sBsXu17S1VieZ7394RFxv4GU8Sf0ff0S7VY+2sVabP3TLOo6GKFobDGxjRya0AfBUXJvdsuqKXQ7ZIw4WcAQeRFx8V4elfbdbtYJ2Olo42xzDXKNGSdRbg13iPVW6NVKLxLoVbtMpLMdmRPcrf8ACEma9xA4a8RaSPTXh5KzrPLXyV9J5n4/0Xgss0ggCAIAgCAIAgCAIAgCAIAgCAICsd+cDfk8D7DN2pbe2tiwm3wV3Qv7n8FLWL7UZm5D8Qk+vf8AdxLzW+Yvj/Z7ovA/n+EWEqZcCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgIRvV2ldSUvZxOtLNdrSOLWAd93nqAPPwVnS1cc8voitqbeCOF1ZX26LZ0VNUZpG3jgsbcjIfYHpq70Cuau3hjhdWVdLXxS4n6F8LKNMIAgCAg2E4A+DG55mRkQywZs1u72jntzN87tLreKtSsUqFHO6ZWjXw3OXo0TlVSyEAQBAa3aHFmUlPLUPOjGkjxcdGtHmSAu64OclFHE5qMXJmLsRiMtTQwTzEF72kuIAAvncOA8AF7dFRm0jyqTlBNm8UZIRBu1Dn4uKGNw7NkTjJoLmXQgX5WBHqT0VjlJU8b6kHNzbwIl6rk4QBAEAQBAEAQFa78/wAUg+u/gcruh8T+CnrPCjI3I/iEn17/ALuJea3zF8f7Gi8D+f4RYSplwIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA8/728SMuIyMv3YWtjb55Q9x97rei1tJHFee5l6uWbMdix9zdEI8Oa+2sr3vPkD2Y+Db+qp6yWbMdi3pI4ryTlVSyEAQBAEBwlka0FziAACSToABxJQEOg2qqa57mYXEzsmGzqqa/Z36RsFi889f9VYdUa1mx79kV1Y5vEP1MLaGfH6RhnbJT1DG6va2Etc0DibXuR1sbrutUTeHlHNjuisrDMnYbeFFXXilYIpwC7KCS17QLks5355ePmub9M691uj2nUKez2ZXu8zbCSse2JjHx07SS0PaWmRw+kQeQ5Dx91zTUqCy+pV1NzlsuhlbN7wqympooIqESMYCA+z9buJ5C3Nc2aaEpNuR1XqJxikomdUb08RLXWoGtNjZ2WQ5dONiOS4Wkrz4jp6mzHhIXsrtBPS1RqWR9tIQ+4NyTnsS45dVatrjKHC9kVqrJRnxdWTj+lXEP/bh7pP5Kr9JX/kWvqrP8Tpj3wVbiGto4iSQAMzrknQBevRRXqcrWSe2CydnanEX3NbTwxCwyhkhc+/MO0sNOhKpWKteB5LkHN+JYM3GX1LY70jI3yXGkri1uXnq0E3XMOHP3dDqWcbFa4xvMxGllMFRQRNkFtM7jcHgQRxBV2GlrmuJSKc9TOLw4m+O29RTQGfE6ZkOa3YxMeTK88TmB0YALak81FyIylw1vPcl57jHM1g4UNdj1YwTRspqWNwvG14c6QtOoJ6X8h5JKNEHh5YjK2W6wjQ4ttvjWHShldBC9p9lwBDXgccrmnQ+Bb6KaFFNizBsinfbW/uSNhvxN6SA9Zf8AxuXGi8bOtZ4EY+63G6ejwySWpkDG/KH25ucezi0aBq4r3VVynalFehzpZxhW2+/+j5i23mLSAuocPeyEfTfE57nDkbaAD3+aQ09S2nLc9nfa94x2NXg29uqY/LWQsey9nZWlkjeul7HysPNST0cWsxZHDVyT+5E3xvb6KGFk8FPLURyNzCRgtG2xILXni0i2otoqsNO23FvDLU70llLJFsF3oVVVWQQCGKOOSRrXe059jx7xsPgp56SMIOWdyCGqc5pYLaKoF4hm0u2FXTOeI8Kmka0kdpmGQgfSGQONvOysV0xl1kiCy2UekSG0O9WtnqYIhFDGx8sbHWDi7K54adS63A9FZlo4Ri3l9CtHVSlNIs/aTaGnoYxLUuIBOVoa0kl1ibC3DQHjZUq6pWPES7ZZGCyyscb3wTO0o6drB+XL3nHyaLAepKuw0S/uZSnrH/aiXbQbcijoKeZ4a+oniY5rODS4sa57jbg0E8PEDxVeGn47Gl0TJ538Nal6simE74pQbVdM1w5GElpH7Lyb+8KxPQr+1/qQQ1j/ALkTraXbSmoomPlDjJI0FkI/6huPpcmjlf7VUrolY8L9S1ZdGCyzEpXY5UN7QupqQHVsZY6SQDlnNwAfCy6fJjtuzxc2W+yNNiu12K4bI0V8MU0DjYSxAtPiONgba2IF+RUsKarV9jwyOd1lb+9ZRum7zsJyg/KTcj2exluPD2LfFRfSW9v+jv6qruZmzu29FWzGCmLy4MLyXMLW5Wua08ed3Bc2UTrWZHdd0ZvESSqElCAIAgCAIDzTt2f+Y1f1z/tW1R5cTH1HmMvHdtb8G0tvyPjmN/isvUeYzSo8tElUJMEBqsY2ipKUtbUS5C4Et7rjcDQ+yCu41yl4UcSsjHqzWf0hYT+eN/ck/wBq7+nt7HPPr7j+kPCfzxv7r/8Aan09vYc+vuQbelt1DPCymops7X3MrhmGg9lmoF7nU+Q6q3pdO4y4pr4KupvTXDFkk2Z2swakpYoG1jO40Zjkfq86vce7zN1BZVbOTlgnrsrjFLJtDvCwn88Z+6//AGqP6e3sd8+vuUhiNZFTV7pqB4MbJM8RFwLHXLqAQNS3yWpGLlXiZmSajZmJL98OIMqI8Pnj9mRkzh117HQ+R0VfSRcXNP2/ksauSlGLLB3Zj/llL+q77xyp6jzZFujy0bjHwPks/wBVJ/kco6/GjufhZSe5r5xb9VJ/CtTWeWZuk8wvuwWSah5/3nYIaKvL4xlZKe1jsNA693AeTtbeIWtprOOvD9NjK1MOCeUXVspjDayliqBxc3vC/B40ePeD6WWbbDgm4mlXPjimbYqM7K4pKNlfjks5AdFRsawcwZRe3uLnnzAVxyddCXqyokrLm+xE99MzzXtafZbEzKDw1c4n3n7FY0aXLINW3zC2dk9oIK2nZJC4XAAey/eY62rSPsPNZ9tbhLDL1VinHKOrbXZ0V9M6C7Wvu1zHkXyuB8OoJHqvabeXLJ5dXzI4IpvvFqOAdJf/ABuVjReN/BBrPAjF3NYBTSQOqpYw+RsrmszatYAxhu1p0DtePHgutZZJS4V0OdHBOPE+5allQLxX+9PY+OogfVQsAniBc4gf9RgHeDrcSBqD4WVvS3OMuF9CrqaVKPEupFNzGOOZUOo3m8crS5oPASNGtv1m39wVjWV5jxLqiDSWb8LNDszGG4xE1oAAqnAAcAA9wAHopbXml/BHUsXnopY5qnxAedaiMNxoNaLAVrLD+3athb0fj+DKxi/8noWqpo5GlkjGvaeLXNDmnzB0KyE2nlGo0nsygd6mFQU1d2dPGI2GNrsreGYl17dOHBa2lm5QzIytVFRnhFk7BYCJYo6ysja97oo2QMcA4RQMYGtIv9J/tE+ICpX2Yk4x7vPyXaIZipS/BsMQ3fYZJI2X5OGFrg4hndY7Kb2c0d2xtrouI6mxLGTt0Vt5wVhsvVHEcaZNLqHPc9oOoDY2lzG69LD1V61cqjCKVb5l2WXyso0zSbbYY2ooaiMi57Nzm+D2DM0+8fapKZcM0yO2PFBopPdthFNWVTqepY4h0Zc0tcWlrmkdOOhPwWnqZyhHiiZumhGcsSLd2X2DpaCd08D5SXMMeV7mltnOY6/sg3uwc+ZWfbqJWR4WaFdEa22iVqAmCAIAgCAIDz3vWw8w4lKbd2UNkb6tDXf4mu94WvpZcVaMrVRxYWTuarxJh4jvrE97T1s45wf8RHoqWsjizPcuaSWa8didqqWQgOLo2niAfMICvd8WCQGiNSI2tkiczvAAEtc4MLTbiLuB9Fb0ljU+H0ZV1VacM9iu92GFRVNexkzQ5jWveWkXDi0AAHwuQfRXNTNwryinpoKU9zJ27yuxksLQGNkgZYCwy2YbW6aleUbU5+Tq7e7HwXd+AqP81h/umfyWZzJd2aPLj2H4Co/zWH+6Z/JOZLuxy49h+AqP81h/umfyTmS7scuPYrDfnC1nyJrGhrQ2ewaAABeHgBwV3RPPFn2/kp61YUcE53Z/NlL+q77xyq6jzZFqjy0bjH/xWo+qk/yOUdfjR3PwspLc185N+qk/hWprPLM3SeYX4sk1CG71MC+VUTnNbeSC8jeuUDvtHm3W3UBWNLZwT9mV9TXxw+CHbksdyySUbzo8dpH4OGjwPMWP7J6qzra8pTRX0dm7iy0NpcVbSUstQ63caSL83HRo9SQqNcOOSiXbJ8MWzSbsMIdT0LXSXMs5M0hPEl/s3/ZsfMlS6mfFPbotiOiHDDfqz7t7sWzEWAh2SdgOR5GhB1yP8PHl8F5Re6n7C+hWL3KWqqTEMLnBOeGQey9vsPA6H2XjwPqFpqVd0e5nONlT7Fl7Gb0o5i2GuAikOglGkbj0df2D8PJUrtI47wLlWqUtpH3fn+KQfXfwOTQ+N/A1nhXyZG5D8Qk+vf8AdxLzW+Yvj/Y0Xgfz/CLCVMuHF7QQQeB0PqgPO+xsHZYvDG36E7mejc7T8Ate55pb9jKpWLsHLZ756Z/8t/3jks8j8Cvz/wAnohZBqhAed6357/71n37VrryPx/Blvz/yeiCsg1CiN9Pzh/Ys+161dH5f5MvWeYXHsr+JUv1EP3bVnW+ZL5ZoVeXH4RspGggg8CLe9Rkh50wF7sMxRgn07KQseT+Q4FubysQ7yWxP/lq29TJg3VbuejAeixzWNTtdiDaeiqJXEaRvt4uLSGt9SQFJVHimkR2y4YNlWbkcIe6okqSCGRsLAer320HkBr5hXtbNcKiUtHF8TkXUs00QgCAIAgCAICBb29mnVVMJ4heWC5sOLoyO8B4iwPoVa0lvBLD6Mq6qrjjldUV1uw2nFFVZZXWhms155Nd9F/lxB8D4K5qauZHbqippreCWH0Z6BBWSap9QBAQ7e581z+cP30asaXzV+f8Aog1PlMrbcz84/wBlJ9rVd1nl/kp6Pxn3fBQuixEyDQSsa9p/Sb3T7rBNJLirwNVHhsyW/sfjjKykimae8WgPH5MjRZw9+o8CFnW1uE2i/VNTimbpRkhwmla1pc4gNAJJPAAcSUDeCot+krXGic0gtLZiCDcEHsSCOoWhoV4vx/JQ1u6iTfdi8HDKa3JrgfPtHKtqfNZZof8Axo3WP/i0/wBVJ/kcooeNEk/CykdzbgMSZfnFIB52B+wFams8szdJ5hfl1kmoHAHQoDzvtJRSYXiZMWgY8SxdDGTfL9rCtiuSuq3MmyLqt2LA20rW4k+gooXXZOWzyWP9UAdDb9r1A6KnTF1KU36bFu18xxivXcshjQAABYDgBwsqZbOltXGZDEHt7RoDi2/eDTwJHQr3Dxk8ys4OvE8NhqI3RTxtex3EH7QeIPiNV7GTi8o8lFSWGUNvC2Ldh8gcwl1PIbMJ9prrXLHdeZB5gHotXT38xb9TMvo5byuh34xislRgtP2hLnRVLo7niWiPM2/kHW9FzCCje8dj2c3KlZ7k63IOHyCQdKh9/wC7iVbW+Yvj/ZY0Xgfz/osNUy4Y9fVsijfK82axrnOPg0XK9inJ4R5JpLLKW3R4c+pxB9U5vdjzPJ5dpITYD0Lj6DqtLVyUa+FGdpY8VjkzTYFIG4ywuNh8rd8ZHBS2LNP4OIPF/wCT0Usc1T4gPPFb89/96z79q14+R+DLfn/k9EFZBqFEb6fnAfUs+161dH5f5MvV+YXHsr+JUv1EP3bVnW+ZL5ZoU+XH4RsyoyQrjePBhlS4Rd99aO6xtOM0n6sn0co/SII1VzTOyO/9vuVL1XLb19jt2apNoKSJkbm007ABla+VwfGLeyXBtiB6+a8slRN53R7XG6Kw8M7MR2TxHEXN/CNRFFA03EFPmNz+k54Gvv8ACy8jdXWvsW/dnsqp2P73t7EzwrDIaaJsMDAxjRYAfEknUk8yVXlJyeWTxiorCMxcnQQBAEAQBAEAQFUbfbsi9zqjD2i51fBoNeZjvp+yfTor9Grx9s/1KN+ly+KBp9kd4FRh5FLXRPdG3QAi0sY6AOtmb0HxUlumjZ90HucVaiVf2zRaGGbZ4dUAGOrj1+i85HDzDrFUZUWR6ouRuhLozIrNp6GIXkq4W/2gP2FeRqnLojp2RXVkB202tZiUD6PDqeacvLLyBhDBke1/PXlbWytU0uqXHNpFa23mR4YLJo91NDLBipinjcx4iku1wseLdfEeKl1UlKrK7kWli42YaLJ2/wBlW4hT5W2EzLuiceFzxafA2HuB5KnRdy5exavq5kfcpfB8ZrsJqHNDSx2naRSDuuA4cPWzgfetKcIXR/kz4TnTIn0O+aHKO0pJA7nle0tv5nX4Ko9C87MtLWx7GzoYa7FiHVkfyei0Ig17SexuO0PEM8LC/jxUcnCnaLzLv2JI8dm8tkcd7uzjp6WOSBl3U9+60f1TgA7KB0ytNugK90lvDLD9TnVV8Ucr0INu+3gGgaYZozJCTmbltmY48bX0IPT+atX6bmPK6lejUctcL6E42fxGpxaqFRkfDRRNe1rSdZnvBY7NbRwAv5ac72q2RjTHh6yf7FmEpWyz0iv3KurKepwmuFtHxOvGT7L2cAfEEaH1V5ON1fyUpKVMywZN6ElUwQUNI/5VJ3RcgtaebhbU211NgOJVT6RQfFN7ItfVcaxFblgbOYe+npooZJDI9jQHPcSSXcTa/K+g8LKpZJSk2i1CPDFJkM3zYF21M2pYO/Ae94xO4+42PvVjR2cMuHuV9XXxR4uxq9yGEE9rWPubDsY78hfO+3rb49VJrZ9IL5ONHDrJlsqgXirtu8cdh2LQVIF2PgDZW/lND3Xt4jukf/avUV8ypx9yndPl2qXsTrDNp6KoYJIqmMjxcGuHg4OsQVVlVOLw0WY2Rkspleb0MeZXdlQUI7eQSB7iwXAIa5oaDw+lcngLK3pq3Xmc9kVNTPmYhHcwNudnvkOE00JN39sXyEcM7mG/oAA30XdFnMub9ji6vgqS9zSbutsvwfK4SAugktnA9prhwe0c+hHTyUuoo5i26oiou5b36FvM2/wosz/LYwOhzB37pGb4LO+ntzjBo8+vGckTx3F6nGv/AEuHRubTEjtah4LWuAPAeHhxNhe2qsQhGj7p9exBOUrvth07k82ZwGGhgbBDwGrnH2nvPFx/lyVSyx2S4mWa4KCwijd4mAy0dbI+xEcjzJE8cLudmIB5OBvp5LU09inBL8GbfXKE8ktwPe+GxhtZA5zwAM8ZHe8SDwPkoJ6Lf7WTQ1m33IkUFbieJD/hxmipTxkdrUPaeUY4R8+8fCygca6uu7/YnTnZ7L9yoa6IU2JFsDHP7GoBYy5c53ZvDgDbUk24rRj99e/qihL7LdvRlzw7blg7WupXUkBHdfK4F7n8Q0MaC7hc38Fm8jO0HlmhzsbyWEU5t7tCyurHzR6MsGMvxLW31I5XJJstKit1wwzPvnxzyi1Njt4WHfJII5qhsUkcbGOa8EC7GhtwbWINr8VQu01nG2lnJepuhwpdiXCrbVUzn0krSJGPEcjTpm7zL+jh8FXw4SxJE+eKOxQOz2NVOE1by6EGQAskZJxsSHaOHA3AN9QVrWVxuglkyoWSqm20T2DfJDbv0cgP6L2kfGyqPQy9GWvrY9jubvjpOdLMPVn8159DLuj362PZmyw7ethsjg15kivzezu38S0m3mRZcS0li6bncdVWybxStcA5pDmkXBBuCDwI6qq1gsJ5OaHoQBAEAQBAEAQGJX4bBOMs8LJB+m0G3lfgvYycejOXFS6o0r9gsLJv8ij9Lj/VS/UWdzjk19jJpNkMOjN2UUIPiwH/ADXXLusfVs9VUF6G6jYGgBoAA4ACwUZIcTCwuDy0ZgCA6wzAHiAeIC9y+h5j1OxeHph4jhdPOMs8LJByztBt5X4LqM5R6M5lFS6oxcP2aoYHZoaSJjuTgwXHkTwXsrZy2bZ5GuEeiNsuDsIDTVGy1A9/aPo4S8m5JjGp6nqpFbNLCbI3VBvODbRRhoDWgADQACwA6ADgoyQxsSwuCoblqIWSAcA9oNvK/BdRlKPRnMoqXVHDC8Gpqe/yeCOO/HK0AnzPEpKcpeJiMIx6Iz1ydEW3lYp2FBKBq+YdiwdXSAg2/ZzFT6eHFYvbchvliD99jZbJ4QKSkhpxxY3veL3d55/eJXFs+ObkdVQ4IpG2JA4qMkNdJBSSytkcInyMBDXHKXNDuIHRcxvi8xjL9zqVEl90o/sY9Xsph8rs0lHCXdezA99lMrpro2QuqD6oyKSCjpRkibDD1DQ1pPn19VDZqI5++X6smr08sfZHb2RsAQRyIPuXSZy13NPX4Jhzzaanpyed2MDv5r36hweOLH5H0/GsqOfwcKXZPDW2fHRweByAj4rvnzkvEccmEX4TbumjZZpc1umguBp4BQynFPdksa5SX2o7GPBF2kEdRwXqae6PGmnhmNiDIHt7OcRuafovsQfRycxQfXAVbmtlk1uHYJhkTw6CCna/kWhpdfw6ei6ep49uLP5PPpuDfhx+DeLwGBBHSRPdkETHvJLiMoc4k3OY8TquZXxzwuX7ncaJY4lF/oZhaxw1AcPQhdJ9jhruY5dTDiYv8K450f8AL9zvkT/xf6HOKOF3siM+QafsXUbFLozmVbj1WDvawAWAAHQL08ILtXLT4hKaGmhimnaP+JO5t2U7eBNxq5/RoPHjwKtVKVa45PC7dytY1Y+GKy+/Y7ot1uFhoDonuIABd2rwSepANr+i8ert7nq0teOh1v3U4WeDZR5Sn/UFe/WWnj0lZHNr91cUMEk9JLITG0vdHIWkFrRc5SACCBfQ3upqtY3JKSIbdIlHMTYbj8Te+CancSWxOBZ4CS5LR4XBPquNbBKSl3O9HPMXHsWaqRcCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgMTEcTgp2555mRt6vcG+6/E+AXUYylskcyko9Su4sTbi+KxCK5paO8lyNHyXGV1j+kBa/5J6q24Omp56sqqXNsWOiLPVIuEdx55fUwQOJEbu84XsHHWzT14D3rM1b474VPwvd+/saejShRZcvEtl7G1qsNie0AsDcpBaWgAtsb6dArlmnrkksYx0x6FOvUWQbec5659TjjVQ6OCR7PaDdPAnS/pxXmqm4UylHrgaWuNl0Yy6ZMfZ6mj+TsNg4vF3ki5c48c1+PRRaKEeRF9crf3ZNrbJ8+S6Ye3sjD2cuyeogaT2bSC0cm35D/9yUOizC6ypeFdPYn12J012vxPr7ja2Jt6clouZQDpy6eSf1GKbr2/uQ/psmlZv/aSEADQaLS2Wxlt5I5twwdlGbC/aAXtrbK/RZf9VS4IP/6/hmr/AElvmSXt/KJG0ACwAA6DgtRJJGW22zQbbNHye9hfM3X3rO/qqXIb9zR/pTfPx7M7oWgvhHyXJzz2ZoWtuLZTfXxXcUnKC5ePfbt7HEm1Gb5mfbf1fudm09S+Ome5hsdBccQCbGy719koUScepx/T64zvipdD5TRQw07SWZmloLiGZr3Fy53ULyuNVNC2ysb7Zz7s9slbde0nh523x+h3YE6LsgIc2QF1swtxcTp4A6LvSOHKXLzjfr8kerVnNfMxn2NRVsaK8WiD7x3ygN1PXvWCp2JLW+HO3Tb+S9XJvReLG/Xf+Db4U0Xkd2PZHMAW6aho0OmnPl4K7p0syfDw7/8AumxR1DeIri4tv+/3MPbqqkioKmSIkPEZsRxF9CR0IBKvUJOxJlK5tQbRWW5fG4oZpaeUhpmyljjzc2/cJ6kG48irusrbSkvQpaSxJuL9S6lmmifUBD95O0TKemfC05p52mOOMau74yl1h56dTZWNPW5S4vREGosUY49Wfd2ezLqGltKLTSnO8fk6Waz0HHxJTU28ye3RDT1cEN+pL1XJwgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAICq95mxFdV1Qmp7PYWtbYvAyEXvx5HjcK9ptRCEcMpaiic5ZRLNgNlRh9PkcQ6Z5zSuHC49lovyA+NzzUF93Mln0J6KuXHHqShQExg4nhrJwM1w5pu1zfaafBQX6eNyWeq6PsT0aidLeOj6rudUmHyvAbJUEtBFwGBpcAb2cb/AGWXDonJJSnt8Yz8/wDkdq+uLcow3+c4M+WMOBa4XBBBHIg8QrEoqSw+hWjJxeV1NdSYW+EFsMxDNSGuaHZb/km4+N1Wr00qlw1y27NZx8FqzUxtfFZHL7p4z8mTh+HshBy3LnG7nH2nHqVJTRGpPG7fVvqyK6+VrWei6LsdGK4UZy0mUtDDmaA0e11N+K41Gm5zWZYxuvkk0+q5KaUc52Z2MoX52vkmc/LezcoAuRa5txK6VMuJSlJvHocu6PA4wiln16nXjGFfKA1rpC1rTmsAONiL6+a51Om56Sbxjc60uq5DbUct7HMUDy5rpJ3ODTfLlaATbQm3G3FdcmTknKTePTY5d8VFqMEm/XLZ8xjDPlDchkLW6GwAvceJXOp03PjwN4R7pdTyJcSWWfDh0hDQ6ocWgtNsrRfKQbEjyTkTeE5vG3ovQ9+ogstQWd/V+pmVNO2RpY8Xa4WIU84RnFxl0ZXrnKuSlHqjWx4O9sZibUHsyCLFoLgDyBv9oKqx0sow5an9vuv5LctXGU1ZKH3fO36Gdh9G2GNsbCbN68dTdWKalVBQj0RXutds3N9WYT8HcZu37ch9sujG2t0sVA9K3bzePfp0RYWriquVwbderMukpHNe575S8kAC4AAAJOlut/gpq6pRk5SlkgstjKKjGODIqIWva5j2hzXAhwPAgixBUyeNyBrKwVFtBuilDy+hlaWE3EchIc3wDtcw87HzWhXrVjE0UZ6N5zBmfgrNp6cCMsjmaOHavaSB4OBDvfdcz+nlv0O4c+O3U33Y4/OMrpaWlB4uY0ySD9W/duos0R9GyXFr7I2Gz+xtPTPM73PnqDxmlOZ1/wBEcG+mviuJ3yksLZdkdQpUXnqySWUJKEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAf/Z",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Harvard University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/H/harvard-university-logo-41D451F949-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 16,
      "2028": 5
    }
  },
  {
    "name": "Harvey Mudd College",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NPoySapYdAbuZfxic3qAPCtnVKOXT4-b3Q&s",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "High Point University",
    "country": "United States",
    "logo": "https://www.highpoint.edu/media/home/HPU-Premier-Life-Skills-Logo-Stacked.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Howard University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/H/howard-university-logo-2001F2699B-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "IE University",
    "country": "Spain",
    "logo": "https://images.seeklogo.com/logo-png/49/2/ie-university-logo-png_seeklogo-493539.png?v=1957670005232013160",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Imperial College London",
    "country": "England",
    "logo": "https://images.seeklogo.com/logo-png/51/2/imperial-college-london-logo-png_seeklogo-514066.png?v=1957824852611852016",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 3
    }
  },
  {
    "name": "Indian Institute of Technology, Bombay",
    "country": "India",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi2dIQLSWepypvoX4CIp9pARS8jenkjlNGFg&s",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Indiana University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/I/indiana-university-logo-043A097AA5-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 11,
      "2028": 4
    }
  },
  {
    "name": "Institute of Business Administration",
    "country": "Pakistan",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Iowa State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/I/iowa-state-university-logo-A57142540E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Jacksonville University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/J/jacksonville-university-logo-2231B577A6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Kean University",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Kean_Seal-2018.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Keio University",
    "country": "Japan",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "King's College London",
    "country": "England",
    "logo": "https://seeklogo.com/images/K/Kings_College_London-logo-B1996FD9A6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Ko\u00e7 University",
    "country": "Türkiye",
    "logo": "https://images.seeklogo.com/logo-png/7/2/koc-university-logo-png_seeklogo-79352.png?v=1957916185462050488",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Lafayette College",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/52/2/lafayette-college-logo-png_seeklogo-529484.png?v=1957856408165704392",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Lehigh University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/L/lehigh-university-logo-3BC42424E2-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "Loughborough University",
    "country": "England",
    "logo": "data:image/jpeg;base64,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dP4Uvq7bc6yKrmp3PhjEmmRlr3H3R5b0u3fMwqq/w+sjLfO+O73eZlKDGffY5p/eH7dv+4LNeGNJfbRaRYr1ahBBRtIiqmzNcJ9uJ7A7HfzC1nDLCJPEy5xsk5tusk0kkDfKOWYg6HzHCfwC1uZW2i2KCB1LRQQOkdI6Nga57jsuOupXaUBSuZgUKUQEREGDyrGLdk9AaW5QgkdYpm/HEfUFaFiGGVGD5XLX1/MqqL2d0cFTCCeAkjfGwfIeStlRo+q3OSyeP6XbXbxdbdcrXV0FOZqx1VA+Ll07DvTmkd+w7+a0/BfCiG2yxXDITHU1LNOjp2jccZHYn/EfyVoCNo3oAb9AvoDSTO4yyG7rSGt0F9IiwiE0pRBGk0pRBGk0pRTQjSAKUVEaTSlEEaTSlEHSu1E64W+ekbUS05lbw82E6ez5grHYli9Hi9DJTUb5ppJpDJNUTu4nyu9SVnkV31oR5KURQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Loyola Marymount University",
    "country": "United States",
    "logo": "https://brand.lmu.edu/media/wnmd/brand/identitystandards/marks-primary/loyola-marymount-university.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Loyola University Chicago",
    "country": "United States",
    "logo": "https://seeklogo.com/images/L/loyola-university-chicago-logo-CDFF26AD8E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Loyola University Maryland",
    "country": "United States",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Maastricht University",
    "country": "Netherlands",
    "logo": "https://seeklogo.com/images/M/maastricht-university-logo-4EE96BF1F2-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Macaulay Honors College at The City University of New York",
    "country": "United States",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Manipal University Jaipur",
    "country": "India",
    "logo": "https://seeklogo.com/images/M/manipal-academy-of-higher-education-logo-1AEA5E2876-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Marquette University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/M/marquette-university-logo-EF916ACD3D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Massachusetts Institute of Technology",
    "country": "United States",
    "logo": "https://seeklogo.com/images/M/MIT-logo-C802537651-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 8,
      "2027": 11,
      "2028": 7
    }
  },
  {
    "name": "McGill University",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/M/McGill_University-logo-0879729A5A-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 4,
      "2028": 5
    }
  },
  {
    "name": "McMaster University",
    "country": "Canada",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 2,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Miami University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/M/miami-university-logo-3D4FA3B491-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Michigan State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/M/michigan-state-university-spartan-helmet-logo-99D0B1B74F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 5,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Monterrey Institute of Technology",
    "country": "Mexico",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Mount Saint Mary's University",
    "country": "United States",
    "logo": "https://i.pinimg.com/736x/6b/b7/61/6bb76147baff32f99251f28704c800d9.jpg",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Nanyang Technological University Singapore",
    "country": "Singapore",
    "logo": "https://seeklogo.com/images/N/nanyang-technological-university-logo-99C7E42213-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "National University of Singapore",
    "country": "Singapore",
    "logo": "https://seeklogo.com/images/N/national_university_of_singapore-logo-368E26424F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "New Jersey Institute of Technology",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/45/2/njit-new-jersey-institute-of-technology-logo-png_seeklogo-452334.png?v=1957832799390200360",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "New Mexico Institute of Mining and Technology",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/3/34/New_Mexico_Institute_of_Mining_and_Technology_seal.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "New York University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/N/new-york-university-logo-0ED0EFFD4A-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 14,
      "2027": 17,
      "2028": 11
    }
  },
  {
    "name": "North Carolina State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/N/north-carolina-state-university-logo-1FD75294F8-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 5,
      "2028": 3
    }
  },
  {
    "name": "Northeastern University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/N/northeastern-university-logo-CD40BD15B7-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 27,
      "2027": 43,
      "2028": 13
    }
  },
  {
    "name": "Northwestern University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/N/northwestern-university-logo-FEA158D1A3-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 13,
      "2027": 13,
      "2028": 5
    }
  },
  {
    "name": "Nova Southeastern University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/44/2/nova-southeastern-university-logo-png_seeklogo-449655.png?v=1957821487122098592",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Ohio University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/O/ohio-university-logo-3F1864BC9C-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Oral Roberts University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/O/oral-roberts-university-logo-D47BD80382-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Oregon State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/O/oregon-state-university-logo-15EE8CD19D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "Oxford Brookes University",
    "country": "England",
    "logo": "https://seeklogo.com/images/O/Oxford_Brookes_University-logo-136111105E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "PES University",
    "country": "India",
    "logo": "https://pes.edu/wp-content/uploads/2022/12/pes_university.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Pan-Atlantic University (PAU)",
    "country": "Nigeria",
    "logo": "https://pau.edu.ng/wp-content/uploads/2021/05/Logo_of_Pan-Atlantic_University-410x193.jpg",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Penn State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/P/penn-state-logo-C0840F2ED2-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 7,
      "2027": 5,
      "2028": 1
    }
  },
  {
    "name": "Pepperdine University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/33/2/pepperdine-university-logo-png_seeklogo-337294.png?v=1957910150996003488",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Philander Smith University",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzHkLNgpCwZ8g_G29MlwxilUmpP5MIhoWVBw&s",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Pomona College",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/50/2/pomona-college-logo-png_seeklogo-506964.png?v=1957659929974767640",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Princeton University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/P/princeton-university-logo-E2C0CB3F22-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 9,
      "2028": 5
    }
  },
  {
    "name": "Purdue University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/P/purdue-university-logo-AEE5C0F598-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 35,
      "2027": 58,
      "2028": 35
    }
  },
  {
    "name": "Queen's University",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/Q/Queen_s_University-logo-E2264B7C02-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "Rensselaer Polytechnic Institute",
    "country": "United States",
    "logo": "https://seeklogo.com/images/R/rensselaer-polytechnic-institute-logo-90C44684ED-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "Rice University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/R/Rice_University-logo-CFCD8A4EAB-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 10,
      "2027": 11,
      "2028": 5
    }
  },
  {
    "name": "Rochester Institute of Technology",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/rochester-institute-of-technology-seal-logo-png_seeklogo-481377.png?v=1957809809922380936",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Rockhurst University",
    "country": "United States",
    "logo": "https://pbs.twimg.com/profile_images/1625028220553777153/bnE-hbyh_400x400.jpg",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Rose-Hulman Institute of Technology",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/49/2/rose-hulman-institute-logo-png_seeklogo-492092.png?v=1957667455482333456",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Toronto",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/U/University_of_Toronto-logo-2417C8AF32-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Rutgers University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/R/rutgers-university-logo-830CA7540F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 14,
      "2027": 18,
      "2028": 7
    }
  },
  {
    "name": "Sai University",
    "country": "India",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Saint Louis University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/saint-louis-university-logo-35F0090710-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "San Diego State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/san-diego-state-university-seal-logo-DD6786803D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "San Jose State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/san-jose-state-university-logo-A1B7F8DC06-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "Santa Clara University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/santa-clara-university-logo-71F279DB9D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 9,
      "2028": 6
    }
  },
  {
    "name": "Savannah College",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/Savannah_College_of_Art_and_Design-logo-6AF15A4163-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Seattle University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/seattle-university-su-logo-0D07F6C94E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Southern Methodist University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/smu-southern-methodist-university-logo-48CB289E6E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Stanford University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/stanford-cardinal-s-logo-E27BFB48E8-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 12,
      "2027": 14,
      "2028": 11
    }
  },
  {
    "name": "Stellenbosch University",
    "country": "South Africa",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Stetson University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/stetson-hatters-logo-png_seeklogo-483772.png?v=1957664556523170776",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Stevens Institute of Technology",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/stevens-institute-of-technology-logo-2C58433A3D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Stony Brook University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/S/stony-brook-university-logo-F3D72C89EA-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 5,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "Suffolk University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/suffolk-university-logo-png_seeklogo-488121.png?v=1957828942574743784",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Syracuse University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/47/2/syracuse-university-logo-png_seeklogo-474986.png?v=1957914034015335192",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Technical University of Munich",
    "country": "Germany",
    "logo": "https://images.seeklogo.com/logo-png/52/2/technical-university-of-munich-logo-png_seeklogo-528049.png?v=1957809047080369344",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Temple University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/T/temple-university-logo-125C20A4A3-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Temple University Japan",
    "country": "Japan",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Tennessee Technological University",
    "country": "United States",
    "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAllBMVEX///9PKYRNJoMwAHTTz95LIoJIHYA9AHrt6vFDEn36+fs5AHj08/eKeKn39vlEFX63rcnf2udACnzk4OuilLvKwtcnAHBbOoyCbqSZirS/ts9WM4lqT5XPyNummb2uosNyWpqTg7B3YJ1hQ497Zp8YAGtlSZJXP4k9HXoAAGZaSotNM4MAAF1LOIJ0apsvD3RuYJd3cZ2I3/r+AAAgAElEQVR4nMV9Z4OjOtKuyUFgkXM25uyeue+G///nrhIgEdq4xz1bX6YHMOiRSqVKKt1uH6F73UuBLksrybKsEdIXov9HN/jH9EBy6/tnWvEBsh3VNRRrbaKMAUhlmT6mqXPdPIqaJopy1+2m6ZGWpYSBcY9biuGqjv2/xoHI9Ns0CZamaTrUy6kb3bZQzYP22aZatO7YTSl6UFvwBEna+uafb71AYeFCoK0sYz0GNypU59XvHL+I3OEBV9bUgOUW4Z9o8wn57RDMgyJDQxr6Nn6jPWHd9oME4PwGKxha9eda+yWpUWVA1q8QyFlb+Ed878dxrao+ojDcMZ7tx20mg+U1RhX9L+D4+WTorEsNMHoqz/G8dOr/8ZiqaZqqahhc/+BNoeoNwGDDoxtTfvTQT1KYT5BB0RU58vkuNwu34tD4XgphFbVRlgSP4263kRSRlfl9cMr/5NxxmlRnn4ZJFfNIbK9KS1Dyw+S40HLRBTtOqk2nr5htM64Sxm26/mheipBPUV1CjUlUZeDmieMVN7v9JzRcQcjeXcvqHXMobuXEg3F6tB518fJ/2x8UJk40WNY/DgOT2SUMig7XVt9rN0jAEzctlisBjJNBBKa2mlv/NwfGGYEMLZD8Uu1lgEwXMlmtJd3PLzv3ljED6rxsZW3be1oYIkBowiEReN4ZoTZlEmjFN3m6DIqbmVtpqqwYw2wedpi0P6vl2H6nsDUhHQX+D71ckpEiIyE0feLxtxAYuZxK4InvaoAEMOgCGiM/CP6YMtVI6Q5l/YfIbDWL9lqZxdubfmf0uqyn8a01Mr4RzoDYLIyU4qaq3PU2kODgY9ZSWrHNMRod8hlLa3+M13yXsBISnoO37zLbTeIWSHBS6wfkhZHT6UZkq7/iW/o31zb1ASUj9cJblGw7xvYGKvg163Bl+n1CQpfKGqts2JwQV43GcDHvwC4eE/6OU+lGYzux6SjcpDbNOA0kLRhj39svK2FTWlReVgf99tt0z+nYyyBjzBL2nYAGNe5G0TxAs142/VJGYNDzLhiWEbu3buhniiZZ6Y5hMdlqBmTK0fnH5YA5UIVdVzzWu2igXGFpMyskxe6RImmy/lgvPyYDBukwjpUFh6VdYVeqNzNGcxCKK6nts3EyPaoTaPrw4Ymj/qK6LUjZp8LRMKRCfChTkPR1coCeS1becN1sHLpqepRS0C2XVWDgETErXQp4MVdUadoxzgpTQPXxXx9VPgs6LHLSz2PhaHllDOJTLZzwHRfoxv9bcdor3RcsdgsCMoFCReJldp1CWUnASLvM6ROZDs6m236HIqrT6pCxd0gZQ4GR8JiP1hIkGxz30bySQeb4Vwdk1MQ+0FJOc3EtyYhDN3mwF8RUqslGdPye9yknWGTY0S+YjZJkIerkOBG0YDPXdeX/rvdhIynPJ9AtXlig9VVG/3pJzqw8vyP6jWzkHwCCx5pIZE3ryTy8qxNSAgIjCm92pricpOm1KjuQsufk9x0ycxpeWLmQaEROD5KUXjddwuJy0H9AkTZ7Mi6azD4aPQ2MTAZlEYalxg2EX4tSx3bM0FfrOi4KzyuKuK5VPzQFL4zt+w7/v9ArZdlCbOcZwSyxnUgmaIz+t4Wa6RpkukjzLB3zPCjHKZA1ZSgiozseCtOPi6bPqhQqCmCkKDCtsr4p4hM/jF/2TgQlHan/zbNfB8yTyMTZWBbvk0OxQGlZ2Uz7noE87iFaIeShNJrdkuaoXuNWEjACyLvHJOJQg4EBpMptvL0Hx8mT3EEMJumPOh54ERJLkKL5LU67ZwZVYARTqZak2qkztKbpkiaJVpRZRFmlBZbg3dyQrFsBml9RIfZ0rBu5gyW7BLON66Omyo2R/Q6YkWDZmu52k6BF2SwmRUZGVMR9tnY7ZPB/BWQFBGHauVxPOGNCmNaZdK3cqjjqIyBoxu9jcYMjLNj8Ilq76cFE85ahN5sq1Vcv5dpumbqYdzeQ1ZxWzTI8oRolOZb4QFQKeDSB+10suXWMBVuJgLQh9BbWDjPcYqGt0ABKkigG9jtLuoH/BgYU0GKcq8Fqjsno22it2SpKBA1pjfXN9aYh6hg8dA/1oHJ4/Q9ZoJBzhaNZYYBybDZyC8m4ZiyBgWYU9zBUurlLzEFBMg+tKYL8zu4UDSTs2dy+QYWE+xBJFvLCzU2/Cp5LJ9lhN3uJiMTSpF9De27x2n47/EI8to4jTLqQPe79hf6fCfK+DVJys35gCa0djNpLUifyU2ptOLkoFG11glM8Q+mfCxQNSo/hiodVjYaHtLIcfPYMjl0X258PgJoOcUq6d3pbhzazgPAL6QZnVEaRX7pyhhe20FgYxpiylzrmQn6TTcHCnAZsT1ShOkWrP/laQbgzyN5cPJ2etNBo2X+Mla8JFWxYnKIzWPfKlj5E9Vs2rl1Hgz5HqTSjKw4WRbsodckCERmblrYqf2vxtFvSYwpRvO0GDI0LjhYsv5cZh8mB5r6lZc5v8FxtjopAud8N691LdUnpI0A9OLlCOKB9p8/UEk8YYyC/KQI3RBbuAaciy5kNi2W58Tc1JzN2LYsNTlBtFph7W2IsjuMGxPy8D3hs9PKNaXOfcH/r1ESutcx0/oW7LBYdJXeXubckDQz1byiBZj3M0TdYckZFeLvnSGO28IQJB6qghynuZjhdd3IQ7VIGBL5fIqvPVJBUQ1pTw6EJH7MwMvQjZn+HnEI3ZnE4zcyap3WPxHwAUrUY7zGgCqJKnDbGZU2gJi5YhfSE+YAwv2MPkocEPVjfUZQsqKE9+w94tuz+ybpGL9lCoj6RFSUDz8OyxVSNoCQwPdq6q1EC8jTVt50K9RgYblMAQHNrAjCxZyI2W2Sj/JDP0S9Z9EwL2CIfJ2iuF4jpA8m+RwqbKMwqUa69dSAThnqzRvBAa65lGL0/EjBUJN/7+cN6/jGHo53rcwcxy8wDeLnPDdSDdbLEdvyKTJvh/E0rFRiLRlfLW5zfCjzliF5pjswrxExppChNh+7I71I8UethMZEbCxkYOdb7zWYVYAWxo+GFT5tEjdE5n2iNrmhafbMjQG0X0wW0B/VPu7X9jNlCgJrI9xxEDpbegvC656SJ02sBGmH9Txdcpmpn4aFqIVUqzAwwFms+HnAwG8ZqgOosSPlw4zj7p7iuEEaTtZe+NHVCL5Mlce3yUfM1XWbvZ1j0T7oZVypY6BdktOdcEBhJvuk1JOBQZ77SOJ2ezP5xM6vNHEgWdcTYDAvUfiiEWmuQoaE8PVrKzmlij0QGvHClxSUeGHmvIg0G85iy+QLf0SjeI5UpFmxRC6sDTczH+vPeVSCQ6WIt6cA0dSyJNj4PqC6W/mBWiJpSXS3oaaOOhD8x6a0vPWkxMWLA/ob/TzpBGl3+4XHBxMZG1tvzZ4hWE3wxNIg/8dq6c43c5lyKWKIRp5/FMmvtkiYdNNZxyVQhWo01ng9NrJD1Ev9pHtkmdO1F6vSPp0/UKf3SNj8F0T2i40FWTuV0aByiyBAVDknEyN/KEIeY0mje/YhMFom6U5CJvBNYIfbi3ljPw+FMoKnkdoXnWw2DBGzULruhAWCNcLKp/hiRr7XEeSNbjdgI30uRKoX7265I158wvE0GhqiSjmtl+ZiJ74np0EMq69pE+SH6N/1cDilLz94Gk0B5KJoEFTJrYkCG5ljR9em44R+pAdL0THFymQMZGMh8f97eD/sZkiX2vY6gsej3nKZx/LYDugStcdB90iAyNMfqYYYbC/B8sHuQbZ+xGxr6tZhk+HEwt5D6bUgOwc3J/+F2lo7uDl5Yp8QeLHCLrMPIgIkHRic6SxjI8tSL3KjSFWZJDfl5MNg4w//XSUPUMkDKO2ojXjhchTSzw3yvHEln0vPUYOkBVvofGX7LLKPJdJNWu/kPgGGqE6zw3/cIyEpZhKBrmzCWyXh4pMlHzmfc8xrxkjvJNCQYjjaEt/xv0jFkSNGlpRv+BBhTIx8hrI+WnhT7TaAeJIVTJWRqP7Amqe+x1HgNMYg0doMCWWRAl2U9kBUqvGh2QbKuln8CDDKWyZUE/23nQYjkMQBZePNKklBh59gdEOyX8AGDJMvhPZHxSlJXOhosFgXIqV+U07n/CBinpwEz0qGxlNvOE0cICs3SSAytKDE77bwB5i90GRLzK7KCBwlI1EMpQ6K5OpTJeEfMHwFz80vKaKQT+0S9mTcbqSe/mLpsZmgmy7+2IoDYbpDMJbPp5uTVGNA1qyfLZcAbFn8GjN2SodFJl9alVPuFZ9/UpVMbbD/LW80Ym27ag3Gf07I0afNJpEZYkhiaEAj4Aoym6XBO4T4gfHMTUz8Fg9NN8DXq/3MhUJ7/4VXgGosAfRO2DbHpD8dFtWRD4P+HDExOUiRE6+IUjKylUzeMg3TSXL0ax6F6SKe/F8DcWrK+aWTW1JIyNXye5+1OBmESVXyvlA/dHSGGFzKvm/CTQzBEN8xV1Q9DNT1pLSjC0PdVr9LYD74GEw7Er1TRoWm2emVE5JbIZ9iPoZ2Zwg3mCVkWF6cDMDKQcZdQA+H+OAHDlKlwxHN32eZxCubWYHNf1uh03mmVpM+olJrJxPC16hiLOcK1b74AoxsFWlpZ5PDmnI0MU9oxGPTOCbwCw/jizKbE80NMfIxxN2r98eNEmDOB8gUYC9vST2mO4V8BA1qc1fwCDBWlWnpiEbq45Q/e4GywANROTFDikJG3PLgFo6eYfSr9Mhi0RDwdklr2AoxKOjM4yWaI8WcCbgrcewtPiuNoFBWOere5vAHDEoIKRS6vgUHrnU7yT6kX5QswN9aAY8PljqeUxSV0+XjK6CdTpqAW33aUN2DoentzLoNBI8NiChu5twdTkKUGnvAZnlI6l9FF/JjBsZPKIWqZLG3liAhm7jd7mJOuL4AxqEixI0Gk7cHYRIIb0THn4CnC+zY93F6wguN/xUI7O3tOBANnji6Ui2DMDMwyKBak+B7MLePCX4xWjVfFc85YVhq7wWC4uFrDBVyJaXAQQtyAmWVdaFwF4yZz8LpIhQ3CezA0yMqp+k7BzXh801icOMTDrJXc7b8WuW23GPiBx3YDZl4GnEG6PDKzfGwFCXAA5kYEHlj1XPMvrkF4jlhLCgrhJGsNJJvPbv2bDDHcZ+CJYLSJdZvt6VfBzFs2mNHyFRjih4Fczkz3XP/GQ7HyYI3VFS6JvVBWmR4SPQ/sJYkIRtbnn6vlRTD/mjmDyNKvwRCjXdZWHaRX1hZhT4C8RIuINy1Zp1cfrE9Sdn3uBclGNAezkhq6V+fM/JFYVDePwNyf5JfrpCmCVSHxsW0N5oQxMi2S9aflGmyi97SD92/XmZkHbO/iotnOH/FEFeAIzI0YDNyk8eV0uWcn3D0H6ysa5+NIyuVHDlEygwOtbcNma4BRvTgys12C0/P5bNRDMGRawdWLbpdc5+OYbsDStsgc53IETGXVBUzpZMoIYOR8gAtrOuYlMM7csHCAsH1wOZtHYMik0biNuRPn+8PiYeYMomNzelytcIKNJqocqEU8GL1QA7CJPL4Cs5CqGbkzrQ8fgvFpOzgRxk0gzFmzhRJiQc1tCW2V9W8y/2XrwJbgwUDVcZVNfPEyGKQzqLdXYEzid+YAtFx8D89rrWRbVPAQciGonvubTE69OojoCGDCmyo9xOG7CsbJFaR0dS/AOESp4paPmFs+SNiJaWMkxsRx0sD9TWwZyz1Q8QQwJt44J2o8V8GYFV7vxnWpOQRzJ2Fwbi74ysj9vb6WsFKyMslDWQeCCDOjOQjoCGAQWP8vcdJcBRMSbT17MTJUfeTCF46ybjg0k5UFiaTg5lbJ6T1EnwVH+z5bYCyU4JGLxA0hV8HEZFftuL4N/OMIDOF3bVqvgFWXJGCoxCXromysqqVkrD8hia2HIV01j1bCF8JR3Gt+Dcw9IvOgiDZv2xKZF3KwXjBWC8vECWNUmto4WVhL180WXIyALK6nQdANNd8B41xMtiQTm9/+qUtLi8mnDALmTsT0Y7kVapymQHQi8DKrjPzYFjK0r44MGfXXubBE5ErP9QulvPCSgzcJGCQX7t4HgvT1OWcA4UY5eAmG2cwCvotg6O9f5kb6hOE5MVWtOjSR2wHxaRAwXHKAyhkvFIz+KpPcPlB3Li+amOKXqcTUFOHADPryHgfHpc/ArAIwJGCkl2AOfCFvgWlfg5E2YEa4ghkWMA7ejAXHL8CUL8FE+8a8Beb1FkwGZm1JxoHBqyHdAv8JMDvnPHptudbIggYAi4v8CMzrTSQXwXyAzW7ens9WMFYwNp4XjcA6A2NeBvOKzT4gAG7FPk1iAaNkvnm/2XfTzxQlOAQTv963/I4A+F3R/PdOts5gnt6yiDhm2FvyAZjoxFnJf+GiaP7AomnuNwQwMMlGanvBAZj/vi76cXHR/IQ6Y067nA8KBmwVLb9Ldm/z/3qtL11UZ76paAp0d3cqFgGjT+JkcJww24MppNdZ+FTRhOuFY0XzmyaASN5j2x4CBojdUGedWyU7t3X+unwJMwG4oinHJsA3jTOR/G0lJgJGF2PaPlpsLG3ng/er/Tb8HZirxtn3zGaRwsdWumIwhqgZDMcBheI1G183m7/n0Ng0PZc2UwGD2fjblMNF0+nT11PmskPje66mDRXJ1m+G3rpJCKdgkk3TVXihOMZlV9P3nIAb8h+bPAEERt5s5CAZpFq6KRvSJkcZ7tvXX3UCfu2e1aRj9+yGnH6zPGIwsgjGf6Lu3Y6gWZ6UcBTosnt27zhfVYBzx/mWPCAW8UMrmbzdFhYrz2S7L9lL+gsbSKnjfFXtTx3n74Y0TBYubj2+9eHwFJp+R0y1H9Fd8osDdY7LHJKyf1eRYiom718OabwXbHJiaiJEz7z/B8/tDRCWe9wN4PUC0iZr5RrbHx+kGNXz3+DfghduH2ziyh0Jwaavw4DaJqYR/W1gpvN/IUju39ykrx/irDEf8DUYx4Drt9ROopW1HkUjzrZdGDA/DQO+F6C1AQajStnNdvn9LbZrycJ8CPPXZVdzIEz/iFTgVMvWzQqeId8I0O5C52DdArkPnTsEjNMDz3sI9SyKUnm39Eio6IKGmhMwYWuavaAo7ELnE6cMi6HzXVLDyPX4LqmBgrmFUevlwg42e9RfWz4ioR4X5DIFo7b+rS654jwsqWH9WCxxpq2Y1LBLN/GU1QzZpZvYCgHT/Od2y0RpXMjXNhyv39F10d6OsOJku79UNG854ULTTbi0poibMiTdhKu6QxOBVvvKfK5bZ7aJQN7w1PBc6J9q9GuzjlTaW1Vh/IcG+Fnlu7LS1bg5bft/XD+xRKB1h/I946YMSQTiSj7SFK01XuCkXNLNJkUrxGWxcdJb7BXbVUMFXHrRed2Z+SuZLlYrclRVJRUfwqLli1jsUrT86bGKyW2K1jZ5zo7WLKGz5LnD1g6WPkun8EwFspmH495D3qb/4t275DnPWCfULnlul9bo/5OTS8SmOU2tFSlZtjxPZyqQCkmn+51xvIly/4NtWqPdP7lcuW1a4y7h1Ey5fihoIZ4L+hlZwDSlis2wU7qTRxrNiE21NyDbq/eSdgmnfvXgVpldwuk2FfgecZ12nAp8Qtia1EGiQPlMGc6gjO4HMtJtLwlylgrM7XH0FM6O36cC75K0a4XTbg+TtM8+PdcJkaXjNEk6BYnJd60UDkvSXt/m5JyxepCkTdLnJS59Phw4ZOZR+vwJ2bQmhHSUCbl+iayB1yr8zenza9+rKdeSo/R5srFBXzc23AT772hjwxndG1ZL6iR3N2dpf8GlvhE3NlDykrUhhxsbxC0nNyxCOD482nJySk5O0cw5wcuyQl81siLZ114mbjkhZHbcNvHDLSc3D3Mmt347Pe95PNgM9BUaVqSaci0eYdvGqyz+H61RJgUHO7CPSNgMRElNuGIlx5uBuG1alAqepw+2aX1B9zYINMjephLrB/+Q2IZegPcKKVdLMAvbtGhTXM50PNmmxW2gY8+NnJOTbaC7XP81dGUXykS1IVZTgd+bD8Ta0KbHI75YeUfYQMfa9eT2a5xsoOO3NlJqDV7g7bY2viJkHOIyNf0T/6fBjKD+M77VuLTh9QpY/NZGRq6xTv/TrY3cplNKZvfkxmG36fQVSRqSMn5NHA+OS1at518m3qarvHZczU3gN52yS09OnT7ddMpvB2YXhOqo2+3AXxDZRE1Npo5YRuFAWOOhV0RtIsUXrzAavx2YUWZwa/f5dmBuoza7MHFWw26j9p5C3/exEl/gVFKa3mvpZLFWU+JOjgza03hoTA8fsYPP2DmfhgW/UZu16cm5gL7YqM1toWfUAt6PQWzrdQv9ju7945FK0ADP6L6m9xI5VBsG5muVbWLCbjgVKMAI9LKsTqdhGHBb6BmN/IkcX2yh54sbsPY/AN8prLjB2ekj9yygFWbR15fdc9RNUgDSR/GC0Lv5EtH3ZP34WIDbtrgBpRo8VmRfFjfgyk4wipOO6xWx7MQBGJa2gLi6nbMUZTnCOrgRoNFad5ZoD9tnaebyKZhN2QnSwo7n8i/LTvAFQRhV/A4huyFxBV6BPQFjVlx2RlY7rqWPapSue370NnwFhhUEgTyTtUHHNefLgiB8qRZG5pNXO+ZSLcfVX1cwbcRn98O0KmW5fGh8InRXM+VZOwFzVKrFFyTSi1ItfBEdRlHCr5xfFtFZwOhZxbUbDyUxSIRL5Th9OTKHRXT6hA/Evyiic1DeyEkhr8V9Vd5oASOdb8IWAZ6DOSxv5MGUG4aX5Y0OCk+pYtHZ9rzw1ArmHToEc1h4yu8EwfWy8NRBSbB7kwhHpvTUtjooCfY5MEtJMF5u3vOEjylcKAl2UKwtHMQQP61ieTA2HwMzF2sTq5h6gtlwpVjbURm9uhRG4bSM3j0D1vsU7Bq0KaM3I0z5cv7XyugdFDhExp5gSq0FDkUDz27d79CmVg92plMsgr/DHMSaF5cKHB6VnsTbSfgnzkpPmt8jwbpZS0+K0wE1gV9wLpaePCgKejMrRVCzf7AoqCsWBZ2pUfhD7a4XBRXLtbJvaIYYrvxT5VrnJhka32usXOslG48vpDt/JZEF/rR/upCu8FJVFqyodwrpCiWOZ/Kev0SOav5AieP5xq8nL2reK3E8F58WhFWvbNyGxVIT/MPFp+Gm5GA4iXHfN4tPC2XBl2vK5tyccPrhsuDsM50oS98tCy4WbGdku4q420cs2P7d2vOYzgq2Y/IH4PID/37B9qWUPv8TxwXjZnrMpwWit8PfKqW/HC6wLaXvj0BY5r9RSn855EBgVrMHwwbN5pCDb4iCrw85QOMiCunvHHLAAuaSIVjICE23mXfC8RPw08dP1N0GS7srs3aJhINBlqbnyq6WDX8wiB68fTDIciTSwcEgRQrEjNVvHgyyObJlpnuryFt3xubIFvm7R7bsUtFaWRFPof32kS2bw3TWFz7hLuz8ycN0VuqhmI33O4fpzLWZt8cchclRcOWNY44kfG7TyTFH3KODoohs91vHHM3hR2t7MNh0qHqHmbY9oo0dQAUsfACVBdgBVNtj3OTs0OGbb5IEfvMAqvOjwQRaT5D+vaPBbFP9ImT720eDnR3aJlJbrNPjrUPbdP7QtrvvPb7IOP7AoW04HELG9ouTx8O/k7JdD/ozi8i9dpyeG606g6M2pSJFpyL3I8fpHRx0uKVWCyZLyrlz/shBh51kgOODDsHuoEPTrKVEPnehf+igw9v+CMrt/dHw/BgEUiasefgIyjbPulTnj6BEjJXl7eYIytAbM9UrFEk/MyU+dQTlbT0c9GBj6Q2rpBEJLsiB1eUbsbceDorp6HBQJNPzQdaxqlXpenU4NT94OOhtObZVP+yYOy5OWWr6oOaGdVLu7QtyU0PXya4oVZHgUazko8e23pYDdc8K2eGQG8zx1rhLuXACRV1vSMRb4geHqUYfPlAXf5Ke1K2fnF8z6DjkHnZLHkWTe7s6/AvZOI147ZZw0uHg1Kmi7DYP3dajjne7Cn+D9odQcxQGEs7oLfQ5yGX/VwFJkpRZVPiO6OPL4fOZ9BXvX/CApAMlcP1Ugxt9+EcOoT44HpyjXieJJQ7n34zRo2n1l4Q0GD4+UhtAe2SDFPDOSAQCcalJNihZscPB+aHjwW8HB7fP5KSa1m2eDknk0/GjFHIFSUKga3ho/ZRPrLtHhhSE9Ef6lC6b/H7u4HbsE2URIJBxdXkd1Y9Q121nfow0sRifIt7zKR0VZDIk5nZO4OVdJiqXOVqWNrCJbqsZYHGt/A3nxVWyZ/eFVa51TPyHjKjc2VWaXIZ3dzBbLmvPTCSLeVr+K3r1AskI73YLpeWsxLChCowcVMXHXKYC+a5FWQ0O855aM84lIMQaCblIjclzyXVUlzvRS1kUePH5opStrC8Kdy6lcfcGKsU069Ou+ZXMVqMBOlhmy+ndalsm/9p8ctDRyqDgFC3OGEZiyzpMjg4HXU/k4jZPjTiTWO6j1n58uqxkI4uSqoxWujjRbKRdbVih0rUubBJxRS+ABJmLr+bdBGGvJZMXzjPDH1PmsEEW6M+w2Ez3lpn7GhqdeerYGzYzJ03vb/XTu7Xc5AiTJaPW5b0+ajnVazWCrGRuDph4PzDzN2R2iTbbVyd6rP/QrBb1uBpOfPINkGe5p/ORTHvVPU13tuy05Czh6MNUz50nB8qw54SwyGSWaxgJPlGs5hPN2Euqg063/UGZjzyFP3+S0kz3JmVhVMQMVbzxeBWod/VgiLzClcWwewa1IG0KN9lbR7YZV7O/CunRr/dEfpDCfJor/+uK3Po8HrP2omzs/pICwxIzVO1okgJFkbqNqmWbfisr8/vg9HoX4YfJzydj3qJggNFTt1qOH3tN/6/NVb/N82ZTmclUvRGwqJmkG1P+Y0vLF6RG1VLmBwI54900M70yqGw/bjO07M6vMaorvt0fIb8dgjkeIUNDGvo2foNDwrrtB4RkfkMQDO3/YhZM0f8AAACbSURBVFSW9sS9NUe9cBTAegxuVKgvLVzHLyJ3eMA1CqAB6BZ/eq7smhW2aRIsHiVNh3o5daPbFurRCYW2qRatO3ZTih5ckx+DJG39P7OwfE02UicNxeJc4ZqOJHdZpo9p6lw3jxpEUe663TQ90rJEspd3qMmWYriq87Oayztkq70UCF5MbBpgHzMGxoj8VxNKAGPWlNz6Q6vK/wcuw03f9Sv3QwAAAABJRU5ErkJggg==",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Texas A&M University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/22/2/texas-am-university-logo-png_seeklogo-226888.png?v=1957907926238011280",
    "graduatesByYear": {
      "2026": 3,
      "2027": 7,
      "2028": 3
    }
  },
  {
    "name": "Thapar Institute of Engineering & Technology",
    "country": "India",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "The American University of Paris",
    "country": "France",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The George Washington University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/G/george-washington-university-logo-300099DFDD-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 4,
      "2028": 1
    }
  },
  {
    "name": "The Hong Kong University of Science and Technology",
    "country": "Hong Kong",
    "logo": "https://images.seeklogo.com/logo-png/45/2/hong-kong-university-of-science-and-technology-logo-png_seeklogo-456364.png?v=1957919971877419552",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The Johns Hopkins University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/J/jhu-johns-hopkins-university-logo-0AD931982D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 10,
      "2028": 5
    }
  },
  {
    "name": "The London School of Economics and Political Science (LSE)",
    "country": "England",
    "logo": "https://images.seeklogo.com/logo-png/46/2/london-school-of-economics-and-political-science-logo-png_seeklogo-462794.png?v=1957920678898852240",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The Ohio State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/O/ohio-state-university-logo-5A58FF15A6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 4,
      "2028": 6
    }
  },
  {
    "name": "The University of Alabama",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-alabama-logo-ACED2AB458-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The University of British Columbia",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/U/university-of-british-columbia-logo-F4496C20CA-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 7,
      "2027": 4,
      "2028": 7
    }
  },
  {
    "name": "The University of Edinburgh",
    "country": "Scotland",
    "logo": "https://seeklogo.com/images/U/university-of-edinburgh-logo-CE1E1A5169-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "The University of Georgia",
    "country": "United States",
    "logo": "https://seeklogo.com/images/T/the-university-of-georgia-logo-F22AAD8AB1-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 4,
      "2028": 3
    }
  },
  {
    "name": "The University of Hong Kong",
    "country": "Hong Kong",
    "logo": "https://images.seeklogo.com/logo-png/45/2/university-of-hong-kong-logo-png_seeklogo-456366.png?v=1957667148086372848",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The University of Kansas",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/36/2/the-university-of-kansas-logo-png_seeklogo-366922.png?v=1957671187290436312",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The University of Manchester",
    "country": "England",
    "logo": "https://seeklogo.com/images/T/The_University_of_Manchester-logo-FB7EED7C0D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "The University of New South Wales",
    "country": "Australia",
    "logo": "https://seeklogo.com/images/T/the-university-of-south-wales-logo-499906810C-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "The University of Texas at Arlington",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/45/2/uta-the-university-of-texas-at-arlington-logo-png_seeklogo-454091.png?v=1957824587612796936",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The University of Texas at Dallas",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-texas-at-dallas-logo-C7E66CE604-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 2,
      "2028": 6
    }
  },
  {
    "name": "The University of Toledo",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/47/2/the-university-of-toledo-logo-png_seeklogo-479638.png?v=1957832920411646400",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Trinity College-Hartford",
    "country": "United States",
    "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNbbGyVwA2JyNW3bjdKWFb60Di-j9XBgkZNg&s",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Trinity University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/trinity-university-logo-png_seeklogo-482226.png?v=1957818822783929240",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Truman State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/T/truman-state-university-logo-197CFFB027-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Tufts University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/37/2/tufts-university-logo-png_seeklogo-370689.png?v=1957917121453613176",
    "graduatesByYear": {
      "2026": 14,
      "2027": 8,
      "2028": 4
    }
  },
  {
    "name": "Tulane University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/tulane-university-logo-png_seeklogo-485347.png?v=1957821783463908520",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "UC Berkeley",
    "country": "United States",
    "logo": "https://seeklogo.com/images/B/berkeley-university-logo-1EC2AA681F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 2,
      "2028": 4
    }
  },
  {
    "name": "UC Irvine",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/uc-irvine-anteaters-logo-27B57856EF-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 12,
      "2027": 15,
      "2028": 9
    }
  },
  {
    "name": "UC San Diego",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-california-san-diego-logo-DC4B544C41-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 10,
      "2027": 26,
      "2028": 10
    }
  },
  {
    "name": "UC Santa Barbara",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/uc-santa-barbara-gauchos-logo-9BAFD57C60-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 8,
      "2027": 4,
      "2028": 5
    }
  },
  {
    "name": "University College London",
    "country": "England",
    "logo": "https://images.seeklogo.com/logo-png/38/2/university-college-london-ucl-logo-png_seeklogo-384008.png?v=1957691849142190760",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "UCLA",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/ucla-bruins-logo-FD8D60AABC-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 21,
      "2027": 26,
      "2028": 17
    }
  },
  {
    "name": "United States Air Force Academy",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "United States Naval Academy",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Universidad Carlos III de Madrid",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Universitas Atma Jaya Yogyakarta",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University at Buffalo",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of Alberta",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Amsterdam",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Arizona",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Bath",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "University of Bristol",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of California",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 4,
      "2028": 0
    }
  },
  {
    "name": "University of California San Diego",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "University of California, Berkeley",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 51,
      "2027": 40,
      "2028": 33
    }
  },
  {
    "name": "University of California, Berkeley, Haas School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "University of California, Davis",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 12,
      "2027": 10,
      "2028": 3
    }
  },
  {
    "name": "University of California, Irvine",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 6,
      "2027": 5,
      "2028": 0
    }
  },
  {
    "name": "University of California, Los Angeles",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 5,
      "2027": 6,
      "2028": 2
    }
  },
  {
    "name": "University of California, Merced",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 4,
      "2028": 0
    }
  },
  {
    "name": "University of California, Riverside",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 6,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "University of California, San Diego",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of California, Santa Barbara",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of California, Santa Cruz",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 11,
      "2027": 16,
      "2028": 0
    }
  },
  {
    "name": "University of Cambridge",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 5,
      "2028": 0
    }
  },
  {
    "name": "University of Central Florida",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Chicago",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/filters:format(webp)/f/112543/1200x1523/cc92fcdba3/1200px-university_of_chicago_shield-svg.png",
    "graduatesByYear": {
      "2026": 8,
      "2027": 16,
      "2028": 6
    }
  },
  {
    "name": "University of Cincinnati",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Cincinnati - College of Engineering and Applied Science",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Colorado Boulder",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "University of Connecticut",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of Dayton",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Delhi",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of East Anglia",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Exeter",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Florida",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 4,
      "2027": 5,
      "2028": 5
    }
  },
  {
    "name": "University of Georgia - Terry College of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Groningen",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Guelph",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Hawai\u2018i - Shidler College of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Houston",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Idaho",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Illinois",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-illinois-at-chicago-uic-logo-0FEB5BC47D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Illinois Urbana-Champaign",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-illinois-at-urbana-champaign-logo-3B7D0CF35D-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 52,
      "2027": 34,
      "2028": 42
    }
  },
  {
    "name": "University of Kentucky",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of London",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Maine",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Maryland",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 26,
      "2027": 23,
      "2028": 13
    }
  },
  {
    "name": "University of Maryland - A. James Clark School of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Maryland - Robert H. Smith School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Maryland Baltimore County",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Massachusetts",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/41/2/university-of-massachusetts-logo-png_seeklogo-410623.png?v=1957831796348327128",
    "graduatesByYear": {
      "2026": 5,
      "2027": 12,
      "2028": 1
    }
  },
  {
    "name": "University of Melbourne",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Miami",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Miami Herbert Business School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Michigan",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 17,
      "2027": 14,
      "2028": 9
    }
  },
  {
    "name": "University of Michigan - Rackham Graduate School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Michigan - Stephen M. Ross School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "University of Michigan College of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 8,
      "2027": 12,
      "2028": 0
    }
  },
  {
    "name": "University of Michigan College of Literature, Science, and the Arts",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 2
    }
  },
  {
    "name": "University of Minnesota",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "University of Minnesota College of Science and Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "University of Mississippi",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Missouri-Columbia",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Nebraska",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of New Hampshire",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of North Carolina at Chapel Hill",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 7,
      "2028": 3
    }
  },
  {
    "name": "University of North Carolina at Charlotte",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Notre Dame",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 5,
      "2028": 1
    }
  },
  {
    "name": "University of Nottingham",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Oklahoma",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Oregon",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Oslo",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Ottawa",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Oxford",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "University of Pennsylvania",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/51/2/university-of-pennsylvania-logo-png_seeklogo-516898.png?v=1957829107666361968",
    "graduatesByYear": {
      "2026": 15,
      "2027": 28,
      "2028": 13
    }
  },
  {
    "name": "University of Pittsburgh",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 4,
      "2028": 2
    }
  },
  {
    "name": "University of Portland",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Reading logo",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Richmond",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "University of Rochester",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 1,
      "2028": 2
    }
  },
  {
    "name": "University of San Diego",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of San Francisco",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of South Carolina",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Southampton Malaysia",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Southern California",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-southern-california-logo-C35D3F2C09-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 15,
      "2027": 22,
      "2028": 9
    }
  },
  {
    "name": "University of St Andrews",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Sydney",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Toronto",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 8,
      "2027": 13,
      "2028": 5
    }
  },
  {
    "name": "University of Toronto - University of Trinity College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Toronto Faculty of Arts & Science",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Toronto Mississauga",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Toronto Scarborough",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Utah",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Vermont",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Victoria",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Virginia",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 7,
      "2027": 9,
      "2028": 5
    }
  },
  {
    "name": "University of Warwick",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Washington",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 20,
      "2027": 15,
      "2028": 7
    }
  },
  {
    "name": "University of Washington College of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "University of Washington Information School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Waterloo",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 11,
      "2028": 13
    }
  },
  {
    "name": "University of Wisconsin",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Wisconsin- Madison",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Wisconsin-Madison",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 24,
      "2027": 12,
      "2028": 13
    }
  },
  {
    "name": "Universit\u00e0 Bocconi",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Unversity of Texas at Austin",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Vanderbilt University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/233x195/aae7423d49/vanderbilt.png",
    "graduatesByYear": {
      "2026": 7,
      "2027": 8,
      "2028": 5
    }
  },
  {
    "name": "Vellore Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Vienna University of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Villanova University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Virginia Tech",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 6,
      "2028": 1
    }
  },
  {
    "name": "Virginia Tech College of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Virginia Tech University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Wake Forest University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Warsaw University of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Washington & Jefferson College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Washington State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Washington University in St",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Washington University in St. Louis",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/1200x1200/73c26a8fc8/washingtonu.png",
    "graduatesByYear": {
      "2026": 9,
      "2027": 8,
      "2028": 6
    }
  },
  {
    "name": "Washington and Lee University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Wellesley College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Wesleyan University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "Western University",
    "country": "Canada",
    "logo": "https://images.seeklogo.com/logo-png/48/2/western-university-logo-png_seeklogo-482469.png?v=1957915864586660840",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "Western Washington University",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Western_Washington_University_seal.svg/150px-Western_Washington_University_seal.svg.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Whitworth University",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Whitworth_University_%28logo%29.svg/220px-Whitworth_University_%28logo%29.svg.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Wilfrid Laurier University",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Wilfrid_Laurier_University_Coat_of_Arms.jpg/250px-Wilfrid_Laurier_University_Coat_of_Arms.jpg",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "William & Mary",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Disambig_gray.svg/30px-Disambig_gray.svg.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Worcester Polytechnic Institute",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/WPI_logo.svg/220px-WPI_logo.svg.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "Yale University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/1200x1260/853f8e7976/yale.png",
    "graduatesByYear": {
      "2026": 9,
      "2027": 14,
      "2028": 4
    }
  }
];

// Statistics:
// Total universities: 377
// Total students: 2654

// Students by year:
//   2026: 945 students
//   2027: 1087 students
//   2028: 622 students
