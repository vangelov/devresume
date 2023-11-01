export const basicsYAML = `
basics:
  name: Name1 Name2
  label: Label
  email: email@test.com
  phone: (912) 555-4321
  url: http://url.test.com
  summary: |
    Summary Line1
    Summary Line2
  location:
    city: City
    countryCode: Country
  profiles:
    - network: github
      url: github.com/test
    - network: linkedin
      url: linkedin.com/test
`;

export const workYAML = `
work:
  - name: Work1
    position: Position1
    location: Location1
    url: http://url1.example.com
    summary: 
      Summary1 **summary bold** *symmary italic* [summary link](https://link.test.com).
    startDate: 2010-12
    endDate: 2010-01
    highlights: 
      - Highlight 2.1 **highlight bold** *highlight italic* [hightlight link](https://link.test.com).
      - Highlight 2.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.

  - name: Work2 
    position: Position2
    location: Location2
    url: http://url2.example.com
    summary: 
      Summary2 **summary bold** *symmary italic* [summary link](https://link.test.com).
    startDate: 2009-12
    endDate: 2009-01
    highlights: 
      - Highlight 2.1 **highlight bold** *highlight italic* [hightlight link](https://link.test.com).
      - Highlight 2.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.
`;

export const volunteerYAML = `
volunteer:
  - organization: Organization1
    position: Position1
    url: http://url1.example.com/
    startDate: 2010-12
    endDate: 2010-01
    highlights:
      - Highlight 1.1 **highlight bold** *highlight italic* [hightlight link](https://link.test.com).
      - Highlight 1.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.

  - organization: Organization2
    position: Position2
    url: http://url2.example.com/
    startDate: 2009-12
    endDate: 2009-01
    highlights:
      - Highlight 2.1 **highlight bold** *highlight italic* [hightlight link](https://link.test.com).
      - Highlight 2.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.
`;

export const educationYAML = `
education:
  - institution: Institution1
    url: https://url1.test.com/
    area: Area1
    score: Score1 **score bold** *score italic* [score link](https://link.test.com).
    startDate: 2010-12
    endDate: 2010-01
    courses:
      - Course 1.1 **course bold** *course italic* [course link](https://link.test.com).
      - Course 1.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.
  
  - institution: Institution2
    url: https://url2.test.com/
    area: Area2
    score: Score2 **score bold** *score italic* [score link](https://link.test.com).
    startDate: 2009-12
    endDate: 2009-01
    courses:
      - Course 2.1 **course bold** *course italic* [course link](https://link.test.com).
      - Course 2.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.
`;

export const awardsYAML = `
awards:
  - title: Award1
    date: 2014-11
    awarder: Awarder1 
    summary: Summary 1 **summary bold** *summary italic* [summary link](https://link.test.com).

  - title: Award2
    date: 2012-02
    awarder: Awarder2
    summary: Summary 2 **summary bold** *summary italic* [summary link](https://link.test.com).
`;

export const publicationsYAML = `
publications:
  - name: Name1
    publisher: Publiser1
    releaseDate: 2014-21
    url: http://url1.test.com
    summary: Summary 1 **summary bold** *summary italic* [summary link](https://link.test.com).
   
  - name: Name2
    publisher: Publiser2
    releaseDate: 2010-10
    url: http://url2.test.com
    summary: Summary 2 **summary bold** *summary italic* [summary link](https://link.test.com).
`;

export const skillsYAML = `
skills:
  - name: Category1
    keywords: ["Skill 1.1", "Skill 1.2"]
    
  - name: Category2
    keywords: ["Skill 2.1"]
`;

export const projectsYAML = `
projects: 
  - name: Project1
    description: Description 1 **description bold** *description italic* [description link](https://link.test.com).
    startDate: 2010-12
    endDate: 2010-01
    url: url1.example.com
    highlights:
      - Highlight 2.1 **highlight bold** *highlight italic* [hightlight link](https://link.test.com).
      - Highlight 2.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.

  - name: Project2
    description: Description 2 **description bold** *description italic* [description link](https://link.test.com).
    startDate: 2009-12
    endDate: 2009-01
    url: url1.example.com
    highlights:
      - Highlight 2.1 **highlight bold** *highlight italic* [hightlight link](https://link.test.com).
      - Highlight 2.2 that takes more space to test what happens with the resume in this case. Some more text to force new lines in the pdf.
`;
