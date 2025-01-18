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
      "2026": 2,
      "2027": 0,
      "2028": 1
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
    "logo": "data:image/jpeg;base64,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",
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
    "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAw1BMVEVmADP///9hACtdACPSu8ZxJ0RjAC6JRGNlADFsIz3IqbhbABb+/P1bAB1QAADSvcWsgpWecYNfACfz5u1eGSauiJhwMEOANFfBp7GnfI6ZZHtZABnz7O/69ffr4eWSZnTn2N+ykJ64maXayNDJsbtVAA+ceIF3PVCMXG3bw8/j0NqLVmt2Nk2mgY+ITGTBnq5vDz58S1dlGDCvlZtmMjhIAACsepJ2IElXDxaSVnFrGDx/O1d0Rku8lKdxOUV+WVyMZ20R14+GAAANSUlEQVR4nO1de3+iOhPWIGlQ0BKPrRdALlIVby27232rp7vn+3+qFwiBoKB4K+z+eP6zDZCHTGYmYWZSq1WoUKFChQoVKvx94FoRQEYT3MqNkd3iUP6HM3eWzrgsC22rHqGHU5tIg3pOqLrT/BwKLsz58JGsRtfOhbxXHSHTifvymEFGzkuGwDGE9BvtA7zqzGU97mvIiOexqTeWed4ycvvsjbvrq9nchYzY3+Zgw8lK4iqLu1bQ7kKmro2lk0/GS2vvqt7pi4ogI/Zbpx4MoanuXaUsrmRzJhmrkYk5O5s7J+UfDLWDd2DBLOtwFzLyUyZ+vRnxHOicsjZg2qBt1WiERPMcI3U1mSEHMsEJk6jhKTJoNKBtxUk/ur02u0rQziVzxIIgbETv+BQZsI6ETOfeYgG1+Hwm6u5kavnJQGESidbYrhnRA0TzGremGDI49pAmXA0wSlobXzE0hZAB0y5tqPhyJTHm05pezqYIMshtRjcc2N4fIIqkri5+AxcL2tnaDGUCg9jXmoyOPNN+jNo5dtBzbh3rAG18sVdzLhmQyaXGryINpayOkAFuLGQLYlwRNJjFQC439QZkOv1MTDqR4IsTPtuUIxAL2YY2A4ITC5rhXihod/HNJssjbgmzItPjdjazTqPjVTwZUbXkpyNcuOdYGOW4HcKxDqhb28uG5sZkRGew+I6PcEF2M9YSPDM58DPzFONHKcioWpOXjuhvbhXNLH2WaNd6Z+7z8yJBu8ecafCZ7qIU62DRwElhasU6oK7DSzTamWTEI4hvpGUt55EUzwxrmrSOiFswq7XPY4bqRmQenzPwsBh+OoyaSr8ViIVMm7Xg3hpitIn7Il6y6jzXaNqYS4ck2XyHNlTN1BeLF7Ek6YNDPDKyam3PX3Xe0jcbvShHuwKF/hmqpH/+tLklGeklS1MFQGBvb+k4FPnsaXMnMtr4UAXA6f7e0nF4GqK0ZNA/5nkqXjXzbCUWQwbP9vfJTqErn7lO+zIykPGL8+LcVedNtdkqeveHZOxP5pUfAyOLopn768glZD7a2Z+Z7AW7XNwjIz3Hz3lv/5ON/82YnU5ldpYOOJNM87GXBdNhFO8+GWjHROfHF/kcuwftfD+HzX02zuvOLtkJKd61VHfH+wcxq8E/z5k1dyIzSX5rkRgf8vPUolhaM0OsnrPq/JLvM+wK3zq9XSGxBslx8wvaXcgoK8S+fQQ30cAog9PbYgAkBM0ukozqrEDi7XNyrKAmT3k+EL4xTzxD0NhP57f42qzoHWMtJToMGJ+sO8vVszazsqlrx/Z6Ehg9NikmHzBVAvC6mRemIS+WeO+dgMUmajDI525BfsPc9SPv0KCtEGGb0YZpcgJbBMFhb3M84oDNNnHXnFd5szNC5jUwLxBKu0eeRxx75A0CUSpUqFChQoUKFSpUqFChRMgOSfzzUOP/ItSy43j/PNTO2v4qOSoyZcXfRebhL0ItI1Lkj0TRNrtChQoVKlSoUKFChQoVKtwE19fsCO9zTQbzjYC3RzqRTM4CmMvOO4Xb6+tlXAtp2RhmJhtsd6/ttj0Kxg632/B5MRQy2EA80ReXJPvcENJuLqrDdvo/4b+qolufH344FVxYeldR1X/TpRL+aPi5QPmjFe8AzAcBfQ/pnQAPZDtL9giAMOr/IzWCD3JB0ql+aTLmLQCm86CH6jA1Yx+T2Ed97ZGBYZbcIG2GARwm0OqL6wpmXAEEe2EQqCqn1YfBJMXKmfpkpiTy10h592BLa2fow8LI1CBPw9q7ckq6QZgV3/GDY+ET6XDfPWgGeJqppc9wgRF+ICoUo6wOAjGRSwaj75ePggIJltcPYssBP4m4FKvO8Jay0Vb7YeBIIGnxpq+O0dYkQ7ivm/Gyr9IJU7ShAUI0NsaepIFdEL+vroLuo8egnbJOUgbLCeWSL7z5rsDQrFNJS7LB40B8VFLOA4yDTovJ4h6MjF1bx+gmgC4tS6IYCW+FI39XSPdxmNCzYvsMtnRculfU/LglYItmW6mJyhJSj0wmkp5JbdKGaQJRMx6XkkQqQzdiM2A8mxHRzHMStg+34c/YW4Btal+663KMiw/IRRnIcszGJkMRFmmD4dxyosJgcBTZynWR9mUfEETViGQ77BfiiANjhvnI0CBTCIVaAoBycvHHhno29U9MegteyW9a75F7IXP9Z/AbYX5OuZRmvlAAl1aJET9JdjlHEhfVl9B80PTT5+A3N6UZR86iPPOFAgBqPVVT8NlIH0Ss/gt1MTcjYhes5QDDpXhbeYjYTyNs2kTFRYadJjM1PRWBp7TmgVMKW3kIsDVYNqHejZLewZIMhtNOcCmfjBEAzIwNbBOp6tDsMMiTwh8ah3exjBW87D8CsKX2RjVdHMx3sU+r4iBEBk6p8Ra1+yXxYdLhaeiQjWj+JD6zEandsIyJ8kETAfX1dYUY7w2Io5V0g4zDKnL5MSGj0gRNq2S28hCIGybSUZl6fnicKPk5/1Xcej8vEJbZUhJ6rK7wG1vvdH4i0bwcgGxpQrYcCVuA0fu7lJ7zWBYg6O8mYw4/xmwa8cY6W7JQk39NBYA9gLLlXKKgwhLaCk9vv/+TH424eF59whj4EVN/Uek6/d5g/PvtlyBsvZcAUrJsvxrIHwsJb5dvM3lg9htON1l7RewzVnF0UMlIVPT5pN+Th4vpEnESV+g0QjV+uX75ZvY7lqYoKVn1CrvklwbppYxUpatbnb75bbwrUOKgsOpYThqJaG6wfqS0OCzHnBinrnFh4b+bkOEnR3sXGPm4Od7NjxcAEs0iFRxbt3NPchSnaazGv9lXjba+fuhtOt1UkfR3d4pc20iHZBTdamwMeT2dCq6npJJV8TxlDID7NF0PV0Zz7nT3r30pkkyi8r2nmT6HHw+84LogrASQcolnKv3/Add1heXH8L3paHGlvUJ3nPBar4tq1+k05fUztNstT7v6hv206AeNoKfWbXv0czfcTOaeIrGOVHS9P+BWfl8vea9HEr7c6kHM2e0RXO4eaoU6A7Blczey3b79LZdjU6E0uKiEahp8l7vglSfieeS7/ZfXIK8FCoDj4Ha6XhfozXjgjIZprGbr7ahtjyQOnqOOfNUsjTx9/rqbDQxzYumdQnfRIOrUVVXRNN/rlT8etgBKEodPLbc8kfJoAPC6+xiaHUvXNEVVRd/HLtIDAHy8EvbcMcWxJp5Dtqvhlt3i0qYTgrjVtrnazvdnOrp3CesPqRknRH0N8Hq/dqQoiqqi6w3z/QFKXr8TvUOcjX++G01H19RE/WN6cb/IScO9HKscqzrN3gPDBqHNiUKznTyVzu5GJmsJEL1rtq4x4PXjrevWW4HOGRxPOo6mqcH0TQW7B8CewZBgrHqiqemdyWOxzhnXbsHdg+wpVo9T2pJrwmi2w2WzT0JzJqa3/uGRP8OKds48yy2NJCTwa3nVtzw962ko5kAnpt4dU4dWVLyhsKz+yls68FDyTVTxW00RfNMxarVGHD97WW1icdLfYg3AbDWpTXnMe4uZVstzuosejiwg5HHiBrE4aUz5bKbMvGjNWrjU27MEiCkn79fIjMjAGruXU2AEY34gLLPTXFlFcwEkj5fLPCigROCiLxokQMuIhIl+0lD/GDb2kMrYZzBAYj86E5MGaTVpaIb2Wt7Psz7aQypFjz+I2xZ9ba4BstWsrr9TcRNfyxkEEAC1KBfRdH+Q7+NxTXIYftPkpWjydB9KOzYoKq8rGgDa5DN6dLQBqoWfzl8hF1We7e5K+vEcYspFNVxQk0jwfLTlSnfZdTsIN6HzZlHK/SXoDsK9YxI7g3+SH5QMDTeZ++F1eN2JAhqv2j+4D2BkK1UT+LIDayRcdrUXCLQJYgWlZRyaXTo2cEtPNFMNgegviZgVI+xrIkTLG5sn6g8UGzSfgsS4hLo4jNHchP4wlwie834vYzal8mxg7MMYUdpWGD07ESgZYvpfac+xQE9q09ZlCmyMz8N6jKPOw7hmhyyFETaIMo5lCkQnaJbJs4mPijOZPBruhehmEj1DQ4HnzBnBgKdj0304eXTwF6H9Trn02KkMyCkGyjgRpN1gU7pApAVK4tmg0QftUC9RYh7ygd1RBwFBGmK6STgwsaQpuxKwYXwYM/nZKcyf8dw0nw31mQfJ2QH4mE3h8wZiej6x2tuPFnGJlSSLABymnMh7XfbsTXgDZVGwvYFubF+E/cymUH8F25QIyqnJQGwKjTYu1E9jbeXhMd7heb9BNiAK44S7/EF/uciz0WYF7tQgIeJipKQ4A7K60QMyAjmmRE/JB449G21cHBlAPwKoPZDikYA1mQszGC8A5oepjYxno/aKHJkeCV4+mPsBwL/E/sieq0mSTsX6Z+ok54j1VE2+wH1NSHIzxumhAPC7HhAYeEzhstn1v8ikpgP7SR4Nj0t/X4d8LcDWFMWenS4cSNjojY08C+Y8fHqbDZrWgTILgT3raV5wKONNAcFmkGkeEL903fCMEz+OE7pC5pYsEOSiufgewBHjQE6iTvzMbAtLtkSrUKFChQoVKlT4evwfx2lJT1lc8NAAAAAASUVORK5CYII=",
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
    "name": "Kolej Yayasan UEM",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Ko\u00e7 University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Lafayette College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Lehigh University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "Lehigh University College of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Loughborough University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Loyola Marymount University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Loyola University Chicago",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Loyola University Maryland",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Maastricht University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Macaulay Honors College at The City University of New York",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Manipal University Jaipur",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Manning College of Information and Computer Sciences, UMass Amherst",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Marquette University",
    "country": "United States",
    "logo": "",
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
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 3,
      "2028": 5
    }
  },
  {
    "name": "McGill University - Desautels Faculty of Management",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "McMaster University",
    "country": "Canada",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Messiah University Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Miami University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Michigan State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 5,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Monterrey Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Mount Saint Mary's University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "NYU Center for Data Science",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "NYU Stern School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "NYU Tandon School of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Nanyang Technological University Singapore",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "National University of Singapore",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "New Jersey Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "New Mexico Institute of Mining and Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "New York University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/203x197/2fdf345a94/nyu.png",
    "graduatesByYear": {
      "2026": 11,
      "2027": 12,
      "2028": 7
    }
  },
  {
    "name": "New York University - College of Dentistry",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "New York University Abu Dhabi",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "North Carolina State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 5,
      "2028": 3
    }
  },
  {
    "name": "Northeastern University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 27,
      "2027": 43,
      "2028": 13
    }
  },
  {
    "name": "Northwestern University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/1200x1200/1dfbb3316a/northwestern.png",
    "graduatesByYear": {
      "2026": 13,
      "2027": 13,
      "2028": 5
    }
  },
  {
    "name": "Nova Southeastern University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Ohio University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Oral Roberts University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Oregon State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "Oxford Brookes University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "PES University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Pan-Atlantic University (PAU)",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Penn State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 7,
      "2027": 5,
      "2028": 1
    }
  },
  {
    "name": "Pepperdine University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Philander Smith University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Pomona College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Princeton University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/750x422/4dcfa2918d/princeton.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 9,
      "2028": 5
    }
  },
  {
    "name": "Purdue University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 35,
      "2027": 50,
      "2028": 31
    }
  },
  {
    "name": "Purdue University College of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 8,
      "2028": 4
    }
  },
  {
    "name": "Queen's University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "Rensselaer Polytechnic Institute",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "Rice University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/162x189/5199ae2aca/rice.png",
    "graduatesByYear": {
      "2026": 10,
      "2027": 10,
      "2028": 5
    }
  },
  {
    "name": "Rice University School of Engineering and Computing",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Rochester Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Rockhurst University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Rose-Hulman Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Rotman Commerce, University of Toronto",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Rutgers Business School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Rutgers School of Public Affairs and Administration",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Rutgers University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 6,
      "2028": 1
    }
  },
  {
    "name": "Rutgers University - Newark",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Rutgers University Department of Computer Science",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Rutgers University New Brunswick",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Rutgers University\u2013New Brunswick",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 12,
      "2027": 10,
      "2028": 4
    }
  },
  {
    "name": "Sai University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Saint Louis University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "San Diego State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "San Jose State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 4,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "Santa Clara University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 6,
      "2027": 9,
      "2028": 6
    }
  },
  {
    "name": "Savannah College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Seattle University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Smith School of Business at Queen's University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Southern Methodist University",
    "country": "United States",
    "logo": "",
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
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Stephen J. R. Smith Faculty of Engineering and Applied Science at Queen's University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Stetson University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Stevens Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Stony Brook University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 5,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "Stony Brook University College of Engineering and Applied Sciences",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Stuyvesant High School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Suffolk University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Syracuse University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Technical University of Munich",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Temple University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Temple University Japan",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Tennessee Technological University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Texas A&M University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 7,
      "2028": 3
    }
  },
  {
    "name": "Texas McCombs School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Thapar Institute of Engineering & Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "The American University of Paris",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The George Washington University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 4,
      "2028": 1
    }
  },
  {
    "name": "The Grainger College of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The Hong Kong University of Science and Technology",
    "country": "United States",
    "logo": "",
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
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The Ohio State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 2,
      "2028": 6
    }
  },
  {
    "name": "The Ohio State University Fisher College of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "The University of Alabama",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The University of British Columbia",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 7,
      "2027": 3,
      "2028": 7
    }
  },
  {
    "name": "The University of British Columbia, Vancouver",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The University of Edinburgh",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "The University of Georgia",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 4,
      "2028": 3
    }
  },
  {
    "name": "The University of Hong Kong",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The University of Kansas",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "The University of Manchester",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 3
    }
  },
  {
    "name": "The University of New South Wales",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "The University of Texas at Arlington",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The University of Texas at Austin",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 24,
      "2027": 18,
      "2028": 18
    }
  },
  {
    "name": "The University of Texas at Dallas",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 4,
      "2027": 2,
      "2028": 6
    }
  },
  {
    "name": "The University of Toledo",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "The Wharton School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "Thomas J. Watson College of Engineering and Applied Science, Binghamton University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Trinity College-Hartford",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Trinity University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Truman State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Tufts University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 14,
      "2027": 8,
      "2028": 4
    }
  },
  {
    "name": "Tulane University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Tulane University - A.B. Freeman School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "UC Berkeley College of Computing, Data Science, and Society",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "UC Berkeley College of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "UC Berkeley College of Letters & Science",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "UC Berkeley Electrical Engineering & Computer Sciences (EECS)",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "UC Berkeley Management, Entrepreneurship, & Technology (M.E.T.) program",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "UC Irvine",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 10,
      "2027": 12,
      "2028": 7
    }
  },
  {
    "name": "UC Irvine Charlie Dunlop School of Biological Sciences",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "UC Irvine Donald Bren School of Information and Computer Sciences",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 3,
      "2028": 1
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
    "logo": "",
    "graduatesByYear": {
      "2026": 8,
      "2027": 4,
      "2028": 5
    }
  },
  {
    "name": "UCL - London's Global University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "UCLA",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 17,
      "2027": 22,
      "2028": 13
    }
  },
  {
    "name": "UCLA College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "UCLA Henry Samueli School of Engineering and Applied Science",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 4,
      "2027": 3,
      "2028": 4
    }
  },
  {
    "name": "UMass Boston",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "USC Jimmy Iovine and Andre Young Academy",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
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
    "name": "University College London",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
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
      "2026": 51,
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
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Massachusetts Amherst",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 10,
      "2028": 1
    }
  },
  {
    "name": "University of Massachusetts Lowell",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
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
    "logo": "https://img2.storyblok.com/0x60/f/112543/1760x2000/8897dec29f/universityofpennsylvania.png",
    "graduatesByYear": {
      "2026": 15,
      "2027": 25,
      "2028": 12
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
    "logo": "",
    "graduatesByYear": {
      "2026": 15,
      "2027": 21,
      "2028": 8
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
      "2026": 8,
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
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Westerville-North High School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Whitworth University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Wilfrid Laurier University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "William & Mary",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Worcester Polytechnic Institute",
    "country": "United States",
    "logo": "",
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
