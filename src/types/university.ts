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
      "2026": 3,
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
    "logo": "data:image/png;base64,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",
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
    "logo": "data:image/png;base64,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",
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
      "2027": 6,
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
    "name": "United States Air Force Academy",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/51/2/united-states-air-force-academy-logo-png_seeklogo-519228.png?v=1957825106839741632",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "United States Naval Academy",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/united-states-naval-academy-logo-BD61B71C8B-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Universidad Carlos III de Madrid",
    "country": "Spain",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Logo_UC3M.svg/768px-Logo_UC3M.svg.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University at Buffalo",
    "country": "United States",
    "logo": "https://www.buffalo.edu/content/www/brand/identity/university-logo-and-marks/_jcr_content/par/image_13.img.209.auto.png/1460123040155.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of Alberta",
    "country": "Canada",
    "logo": "https://images.seeklogo.com/logo-png/48/2/university-of-alberta-logo-png_seeklogo-487548.png?v=1957675899742513816",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Amsterdam",
    "country": "Netherlands",
    "logo": "https://seeklogo.com/images/U/university-of-amsterdam-logo-259A12BDDB-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Arizona",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-arizona-logo-02A8CB5ACB-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Bath",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/university-of-bath-logo-F7E857C9BD-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 2
    }
  },
  {
    "name": "University of Bristol",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/University_of_Bristol-logo-D30E16C270-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of California, San Diego",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-california-san-diego-logo-DC4B544C41-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 11,
      "2027": 28,
      "2028": 12
    }
  },
  {
    "name": "University of California, Berkeley",
    "country": "United States",
    "logo": "https://seeklogo.com/images/B/berkeley-university-logo-1EC2AA681F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 55,
      "2027": 43,
      "2028": 38
    }
  },
  {
    "name": "University of California, Davis",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-california-davis-logo-E1FD2FC656-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 12,
      "2027": 10,
      "2028": 3
    }
  },
  {
    "name": "University of California, Irvine",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/uc-irvine-anteaters-logo-27B57856EF-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 18,
      "2027": 20,
      "2028": 9
    }
  },
  {
    "name": "University of California, Los Angeles",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/ucla-bruins-logo-FD8D60AABC-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 26,
      "2027": 32,
      "2028": 19
    }
  },
  {
    "name": "University of California, Merced",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/en/5/51/UC_Merced_Seal.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 4,
      "2028": 0
    }
  },
  {
    "name": "University of California, Riverside",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-california-riverside-logo-9365035EE5-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 2,
      "2028": 2
    }
  },
  {
    "name": "University of California, Santa Barbara",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/uc-santa-barbara-gauchos-logo-9BAFD57C60-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 9,
      "2027": 7,
      "2028": 5
    }
  },
  {
    "name": "University of California, Santa Cruz",
    "country": "United States",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/5/53/The_University_of_California_1868_UCSC.svg",
    "graduatesByYear": {
      "2026": 11,
      "2027": 16,
      "2028": 0
    }
  },
  {
    "name": "University of Cambridge",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/university-of-cambridge-logo-E6ED593FBF-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 5,
      "2028": 0
    }
  },
  {
    "name": "University of Central Florida",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/ucf-university-of-central-florida-logo-503B602697-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Chicago",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-chicago-logo-0F38E68A5B-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 8,
      "2027": 16,
      "2028": 6
    }
  },
  {
    "name": "University of Cincinnati",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-cincinnati-logo-068790B207-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Colorado Boulder",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-colorado-boulder-logo-FD14032FDF-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "University of Connecticut",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/uconn-university-of-connecticut-logo-628B6947D6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of Dayton",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-dayton-logo-8829C6C015-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Delhi",
    "country": "India",
    "logo": "https://seeklogo.com/images/U/university-of-delhi-logo-3DE170CB5E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of East Anglia",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/university-of-east-anglia-logo-1D7DF6FCE8-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Exeter",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/university-of-exeter-logo-1A0C84D6B5-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Florida",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-florida-logo-375A948311-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 4,
      "2027": 5,
      "2028": 5
    }
  },
  {
    "name": "University of Groningen",
    "country": "Netherlands",
    "logo": "https://seeklogo.com/images/U/University_of_Groningen-logo-7F9A2881AB-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Guelph",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/U/university-of-guelph-logo-2193E664A6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Hawai\u2018i - Shidler College of Business",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/31/2/university-of-hawaii-system-logo-png_seeklogo-319469.png?v=1957910033517899424",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Houston",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-houston-logo-2085C6DEAB-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Idaho",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-idaho-logo-287DECCFB0-seeklogo.com.png",
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
    "logo": "https://images.seeklogo.com/logo-png/29/2/university-of-kentucky-logo-png_seeklogo-290055.png?v=1957908012277910464",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of London",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/45/2/university-of-london-logo-png_seeklogo-450397.png?v=1957909759729577888",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Maine",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/34/2/the-university-of-maine-logo-png_seeklogo-347010.png?v=1957818458424269688",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Maryland",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/43/2/university-of-maryland-logo-png_seeklogo-433813.png?v=1957678988663550488",
    "graduatesByYear": {
      "2026": 27,
      "2027": 24,
      "2028": 13
    }
  },
  {
    "name": "University of Maryland Baltimore County",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-maryland-baltimore-logo-CDC0D50D78-seeklogo.com.png",
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
    "country": "Australia",
    "logo": "https://images.seeklogo.com/logo-png/49/2/the-university-of-melbourne-logo-png_seeklogo-490645.png?v=1957910569511491264",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Miami",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-miami-hurricanes-logo-93C569AD40-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "University of Michigan",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/43/2/university-of-michigan-logo-png_seeklogo-433396.png?v=1957910258486258376",
    "graduatesByYear": {
      "2026": 25,
      "2027": 30,
      "2028": 13
    }
  },
  {
    "name": "University of Minnesota",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/43/2/university-of-minnesota-logo-png_seeklogo-433809.png?v=1957909696246879520",
    "graduatesByYear": {
      "2026": 1,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "University of Mississippi",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-mississippi-logo-295DEE8C1C-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Missouri-Columbia",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-missouri-logo-37DFAB469B-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Nebraska",
    "country": "United States",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of New Hampshire",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/unh-university-of-new-hampshire-logo-AF4588C2C9-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of North Carolina at Chapel Hill",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/unc-university-of-north-carolina-logo-F24CC0D51C-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 7,
      "2028": 3
    }
  },
  {
    "name": "University of North Carolina at Charlotte",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-north-carolina-at-charlotte-logo-4D08FF85F7-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Notre Dame",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-notre-dame-logo-813909D0A5-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 5,
      "2028": 1
    }
  },
  {
    "name": "University of Nottingham",
    "country": "England",
    "logo": "https://seeklogo.com/images/T/The_University_of_Nottingham-logo-EE8238E565-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Oklahoma",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-oklahoma-logo-7CBBD70F93-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Oregon",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-oregon-logo-4A41F51345-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Oslo",
    "country": "Norway",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Ottawa",
    "country": "Canada",
    "logo": "https://images.seeklogo.com/logo-png/35/2/university-of-ottawa-logo-png_seeklogo-356159.png?v=1957913114690450536",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Oxford",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/University_of_Oxford-logo-2ACBB1AA61-seeklogo.com.png",
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
    "logo": "https://seeklogo.com/images/U/university-of-pittsburgh-seal-logo-8D988C4E72-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 4,
      "2028": 2
    }
  },
  {
    "name": "University of Portland",
    "country": "United States",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Reading",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/university-of-reading-logo-1A24DB0CA0-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Richmond",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-richmond-logo-C721BEBDD6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "University of Rochester",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/32/2/university-of-rochester-logo-png_seeklogo-321414.png?v=1957916539675779840",
    "graduatesByYear": {
      "2026": 3,
      "2027": 1,
      "2028": 2
    }
  },
  {
    "name": "University of San Diego",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-san-diego-logo-E90A4D1FF2-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of San Francisco",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-california-san-francisco-ucsf-logo-CBA32CAE3E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "University of South Carolina",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/48/2/university-of-south-carolina-logo-png_seeklogo-481311.png?v=1957666860901918064",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Southampton Malaysia",
    "country": "Malaysia",
    "logo": "https://jmeducationgroup.com/wp-content/uploads/2021/03/Uos_international_malaysia_Logo_Uniblue_Rgb_900px_w_72ppi.png",
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
    "country": "Scotland",
    "logo": "https://images.seeklogo.com/logo-png/48/2/university-of-st-andrews-logo-png_seeklogo-485877.png?v=1957667032329381504",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Sydney",
    "country": "Australia",
    "logo": "https://images.seeklogo.com/logo-png/25/2/university-of-sydney-logo-png_seeklogo-250838.png?v=1957905001615788496",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Toronto",
    "country": "Canada",
    "logo": "https://images.seeklogo.com/logo-png/52/2/university-of-toronto-logo-png_seeklogo-525642.png?v=1957822364117987928",
    "graduatesByYear": {
      "2026": 12,
      "2027": 15,
      "2028": 5
    }
  },
  {
    "name": "University of Utah",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-utah-logo-7CC6916092-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Vermont",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-vermont-logo-2AD93482FC-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Victoria",
    "country": "Canada",
    "logo": "https://seeklogo.com/images/U/university-of-victoria-logo-98CE9807CA-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "University of Virginia",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-virginia-logo-C4D6C5756F-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 7,
      "2027": 9,
      "2028": 5
    }
  },
  {
    "name": "University of Warwick",
    "country": "England",
    "logo": "https://seeklogo.com/images/U/university-of-warwick-warw-logo-70A6C6C121-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "University of Washington",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-washington-logo-E871578EE6-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 20,
      "2027": 20,
      "2028": 8
    }
  },
  {
    "name": "University of Waterloo",
    "country": "Canada",
    "logo": "https://images.seeklogo.com/logo-png/44/2/university-of-waterloo-seal-logo-png_seeklogo-443174.png?v=1957691164726566720",
    "graduatesByYear": {
      "2026": 2,
      "2027": 11,
      "2028": 13
    }
  },
  {
    "name": "University of Wisconsin",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-wisconsin-w-logo-8212334735-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 26,
      "2027": 13,
      "2028": 14
    }
  },
  {
    "name": "Unversity of Texas at Austin",
    "country": "United States",
    "logo": "https://seeklogo.com/images/U/university-of-texas-at-austin-logo-B457D4231E-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Vanderbilt University",
    "country": "United States",
    "logo": "https://images.seeklogo.com/logo-png/43/2/vanderbilt-university-logo-png_seeklogo-433778.png?v=1957690840836743096",
    "graduatesByYear": {
      "2026": 7,
      "2027": 8,
      "2028": 5
    }
  },
  {
    "name": "Vellore Institute of Technology",
    "country": "India",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Vienna University of Technology",
    "country": "Austria",
    "logo": "https://images.seeklogo.com/logo-png/50/2/vienna-university-of-technology-logo-png_seeklogo-505756.png?v=1957787333792030640",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Villanova University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/V/villanova-university-logo-26E73F29A1-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Virginia Tech",
    "country": "United States",
    "logo": "https://seeklogo.com/images/V/Virginia_Tech_Hokies-logo-60D32F23AD-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 3,
      "2027": 6,
      "2028": 3
    }
  },
  {
    "name": "Wake Forest University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/W/wake-forest-university-logo-976DCDFB11-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Warsaw University of Technology",
    "country": "Poland",
    "logo": "data:image/jpeg;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Washington & Jefferson College",
    "country": "United States",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Washington State University",
    "country": "United States",
    "logo": "https://seeklogo.com/images/W/washington-state-university-logo-287B4EC8BB-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Washington University in St. Louis",
    "country": "United States",
    "logo": "https://seeklogo.com/images/W/washington-university-in-st-louis-logo-38A87EAAF0-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 10,
      "2027": 8,
      "2028": 6
    }
  },
  {
    "name": "Washington and Lee University",
    "country": "United States",
    "logo": "data:image/png;base64,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",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Wellesley College",
    "country": "United States",
    "logo": "https://seeklogo.com/images/W/wellesley-college-logo-516AA7F045-seeklogo.com.png",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Wesleyan University",
    "country": "United States",
    "logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAt1BMVEX////YIyfWAADYGh/RP0DqysrZHyTboKDTJynPDhPisbHq0tLHAAHw3t7OMDHQJyrdsbH++vn99fLZExnbnJz66ujPAAfeU0/zyMXSRUbkw8PHGBvOAADeW1v44d/bNDX77ubbOCT11NLdSkfyw7vwuLHgXE/kgH3ibWfusq/jdXLZKyTtq6Prop3RTE3aOTzolpHcRD3plYnkem/cQzHeUELnjIXmhnrgYlrjc2PcPBHaLRr43NOyv90gAAAIxklEQVR4nO2dfXuaOhiHlbSZO67tIEe0W6sWddWqU9fNutN+/891hAR5AgkvGgJ65ffHdl3ukXKTPK9kW6NhZGRkZGRkZGRkZGR0kPM1Rf8U16cj9G+gTzcnw7S/3MnVKi78ubhcXw+31wpgsFo1jxS6UgFz7E9XLDUwRz9LtTIwCZiqKZjMyhgYDTI+c9krY2DUy/jMZa+MgVEv4zOXvTIGRr2Mz1z2yhgY9TI+c9krY2DUy8AYGA0yMDlgkJWi0Ain2ODsiyFNMOSxI7fvMxo8GMqNnqJroq7wYt4oTnPOMF0Dk6FLh0GjWa9vJyydvjceT5Yug2ktBEZ2x+uNZ715dE28Wk7GPY8zdbzeehX/seVFs/lu3Y/dZm/7OHjnolnSqL+cjuaxaOZHvffRdO0drLzn7ruVfISl5RlM3J3D2fU2FkE4ZmTtOBpnZ7lIeDlErG5o2t9fSWBUatK0fkGzzrMlNFrD7TMW2jC5W2a1E1uVCoMtDmZKhHfwBN17kQaDpuxKEqNyyxlrnA3TtCZ5YcgrNVqKL1QyDPoNzOyl+EbJD7DPZA+dWjLsROrXAtO0PoAdDLecEQgB9h/JjQY3O6TXaUp+Xskw5A3Y9SX7zH0FRin7jPygJm8y3pJh0ApG5zBbxgXjRMeVLzP1wE4i82uCwfMZMOxtxLcB44TzJiE+ME8GUhctuTkLoym90WfxPgv3TyBppiF/gz+3n6VeVTrMygOWC0kIcEEI6HclgdeiV0rWl9pgMFoDS9mNkG1k46zFS4Pn1P0W8pOCpc8AyHQYWcq2CBqBOCGJ4BYFlm1VLTB4ABO8xHnxAOSjzlQYAtgukwURLTD76hAk+KF4n6FHeL2F6NmTLttlKSVC+TBoBEPAVgjjwhpOMKnYy1oGz0RW4GmCabpLsDQfon2G59z1RG6BH9guk8RDXTBkCtsv0T7j+55GY9ZKDhWmQaNgS0KdNhg87wFjkUNYQ/6CglRjLWz6Jyl1qJbxrLUGgddJPlquAAiU8Cw0oLsstRHVAoM2cJ/9TT516v7As8Zxz3Jfgl3miDtvnTB8L+nF74el9n4vWj9nF1sasgg+74jGGJphyBQ2AvERkUULnslfsH5rHgZtqNtNUhdG0ysNruH8Fbsj2mg6WwvEiQ8+npFX+jT+pCQZRTA3t2khJrhfGHtjbT5bNu+PtQXrx+8zvAw+HKYvjCYYbAHvtvkkztx/ZuE52Gc9eN9hEbGtBQwfAridj+iYsrMjTQt2pbB7Ji/0WWSw6ILhZk6dJ2DPkpC/EmEtGegtunPcpLGsVxOYpgXGlg7YLrgVuL0dfGSBkhR4FhrR/ZdWY2qFcUEv2ehFe4hlw05QP1pwMLU53DqbIwyFA/UqYMKmN5DvIOxjRP2EuhF2gdHMOnyVOpywzakEJszhgaJBLenSncXaRxgnOg9sIfBqGHzwmO2ZumC4ZrI3YN8gtA0NSxz0BIjDEMB2mbATqgiGb/NfXPYhXYpD8QnjRBi8WBu6zv4h2mCaCIaABf1G+B73ELnYoI8SjygiHWQmas9qYbrD6Ct0gBYO1aIhBUZRCLDpxy4NcZNk91khTJj66I1u/aeORnTrgb4exgkvuH9WpIonIVXBNMkzCLzBAI29CRuDmAvjROBZ7FVi/zEzMGuF4WZO/s1hTN3/FdwnHoBGYEYOBbdgxlEpTBMtwZf22wZvaIu5gl+HccLrErbL0oay1cBwM6d9m8/G5UtuEo66kZGzJWREE1HqVKYKGNwCg0v7EbEWc8r3YS3QCEwGFg0IszwLoxWm6cKZ09IdBb/HJzEwTvR3FDhMsnWCCWt5eqMudf8tiRuBELDeBVnVy+P+mmH4XvK/4NePxPSSgDgxGfsuIztBUC0MmxhT0VZ4kRwrg6NBNh3950ky2mG4XjKQwBtwcxwzSswNawLzK3ZY7tAMQKMtf7TLzprKVASDfvMnFIVvY9GGX79O2juZCmH4c06yVxTs/UWo9NF/hTCky31VPDwmO279fuRzf/0w3BGmhvMqToZcnMgaylYJw51zkryisOAb6tTzdNXCwKOO0mSIH0A8S38nUykMHCc579LzkJHRR+6FqQAGbQ5flIcpMJt+zev+imDu8/+8/RbCh5mT7PxSE7yAtmVnGAUiP9snwzS+XRWhQWEISAtTh6OOk/yrjq6+nc6ypymyNmg0pN9KrVLC11PT3DBEDYtPk/8BHnrJVM9mLeZH4m8vSFlWilj8nVagCqAvwjIOKHQDo2VelyF3pzt/RHOXv9qkhWT6VB9jv+G08+4y8qCQpdG4zv13AjHeep43znjm6KXveYuUo3Icy2elLPsInZ+mtVqtst9Q+Eb5LqicxafJu9MwyvMPTOb+VyhLYNnTPBQpBZSJ3CrIlUld3xbJnqpYrkphKRahFQndl7DHqK5/al4bcq8sV1ZOQxQUymk0hWroU1lU5n2R2ittNOR7ySz7CP1dE40GliLZs/4sfvbUsDaaWLTstJLyvkjtQp30MSzlxmReJUdoRf1+bpoys6eyfj+vCk05as6yX5uy/EZbHONoyukIyHft6+KrlG6tknUJaNTXApWx7PON6lqAtCpj2a8NUkpDbivxl1BKawFULYvSWkBz3hdJWfasIFeWRlOxv4Qq9jZKxlJNrkzqunVyvqnFHqNqfzlxbVyd/UuW2qf1nkTB/y2lUCd10jVj8Y8LHE1TO5ai5wWAVBxWUK72cZ10DfK+SEfNBWoUk3kdsTY1yfsiFa6ha+j7kdrFYlqN18XXzecCNDVnKVQL1J6lQC1wBiy5a4GzYMkZ02qaK5PKMRc4Gxa/Fsjo1s5kj1FlrM1ZsWS8Izgzln0UaElpzo5lTyOrBc6QRVoLnCWLhOZMWYQ1NLk7UxZBLVD5nP8UXfNn1cm9tnMXZYibqms9d1GGvkVzAXd11uviqx2uTa3myceqfRfQuOWdg9Wp9p17MSx+hHYvhsXPnquLYWk0bs4+jhkZGRkZGRnVV/8DgdTYh9bRanQAAAAASUVORK5CYII=",
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
    "country": "Canada",
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
    "logo": "https://seeklogo.com/images/W/william-and-mary-logo-3B1A3216D2-seeklogo.com.png",
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
    "logo": "https://images.seeklogo.com/logo-png/33/2/yale-bulldogs-logo-png_seeklogo-336803.png?v=1957794865930110488",
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
