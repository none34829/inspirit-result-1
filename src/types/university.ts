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
      "2027": 6,
      "2028": 3
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
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Delft University of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Denison University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Drexel University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Duke University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/1200x1478/74f315b417/duke.png",
    "graduatesByYear": {
      "2026": 14,
      "2027": 21,
      "2028": 11
    }
  },
  {
    "name": "Duke University Pratt School of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Durham University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Egypt University of Informatics-EUI",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Eindhoven University of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Elliott School of International Affairs",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Embry-Riddle Aeronautical University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "Emory University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 4,
      "2027": 3,
      "2028": 2
    }
  },
  {
    "name": "Emory University - Goizueta Business School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Esade",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Faculty of Engineering - McMaster University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Florida Agricultural and Mechanical University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Florida State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Fordham University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 3,
      "2028": 1
    }
  },
  {
    "name": "Georgetown University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 4,
      "2028": 2
    }
  },
  {
    "name": "Georgetown University Walsh School of Foreign Service",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Georgia Institute of Technology",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 16,
      "2027": 5,
      "2028": 3
    }
  },
  {
    "name": "Georgia State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Gettysburg College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Gies College of Business - University of Illinois Urbana-Champaign",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Hal\u0131c\u0131o\u011flu Data Science Institute, UC San Diego",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Harvard University",
    "country": "United States",
    "logo": "https://img2.storyblok.com/0x60/f/112543/3840x2160/97b777b67b/harvard-symbol.png",
    "graduatesByYear": {
      "2026": 6,
      "2027": 16,
      "2028": 5
    }
  },
  {
    "name": "Harvey Mudd College",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 0
    }
  },
  {
    "name": "Hauppauge High School",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "High Point University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Howard University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 2,
      "2027": 1,
      "2028": 1
    }
  },
  {
    "name": "IE University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Imperial College London",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 3
    }
  },
  {
    "name": "Indian Institute of Technology, Bombay",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "Indiana University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Indiana University - Kelley School of Business",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 7,
      "2028": 2
    }
  },
  {
    "name": "Indiana University Bloomington",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 5,
      "2027": 3,
      "2028": 0
    }
  },
  {
    "name": "Institute of Business Administration",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Iowa State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Ira A. Fulton Schools of Engineering at Arizona State University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 2,
      "2028": 1
    }
  },
  {
    "name": "Ivey Business School at Western University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 3,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Jacksonville University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Johns Hopkins Whiting School of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "Kean University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 1,
      "2028": 0
    }
  },
  {
    "name": "Keio University",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 0,
      "2028": 0
    }
  },
  {
    "name": "King's College",
    "country": "United States",
    "logo": "",
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
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
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
    "logo": "https://img2.storyblok.com/0x60/filters:format(webp)/f/112543/394x589/7de8201fea/su_new_blockstree_2color_darkbgrd.png",
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
      "2027": 3,
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
      "2026": 3,
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
    "logo": "",
    "graduatesByYear": {
      "2026": 8,
      "2027": 25,
      "2028": 9
    }
  },
  {
    "name": "UC San Diego Jacobs School of Engineering",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 1,
      "2027": 1,
      "2028": 0
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
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
      "2027": 0,
      "2028": 1
    }
  },
  {
    "name": "University of Illinois Urbana-Champaign",
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 51,
      "2027": 34,
      "2028": 41
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
    "country": "United States",
    "logo": "",
    "graduatesByYear": {
      "2026": 0,
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
