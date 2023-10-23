export const SAMPLE_YAML = `
# Demo resume adapted from https://github.com/jsonresume/resume-schema/blob/master/sample.resume.json

basics:
  name: Richard Hendriks
  label: Programmer
  email: richard.hendriks@mail.com
  phone: (912) 555-4321
  url: http://richardhendricks.example.com
  summary: 
    Richard hails from Tulsa. He has earned degrees from the 
    University of Oklahoma and Stanford. (Go Sooners and Cardinal!) 
    Before starting Pied Piper, he worked for Hooli as a part time 
    software developer. While his work focuses on applied information theory, 
    mostly optimizing lossless compression schema of both the length-limited 
    and adaptive variants, his non-work interests range widely, everything 
    from quantum computing to chaos theory. He could tell you about it, but 
    THAT would NOT be a “length-limited” conversation!
  location:
    city: San Francisco
    countryCode: US
  profiles:
    - network: github
      url: github.com/richardhendricks
    - network: linkedin
      url: linkedin.com/richardhendricks
work:
  - name: Pied Piper
    position: CEO/President
    location: Palo Alto, CA
    url: http://piedpiper.example.com
    summary: 
      Pied Piper is a multi-platform technology based on a proprietary 
      universal compression algorithm that has consistently fielded high
      Weisman Scores™ that are not merely competitive, but approach the 
      theoretical limit of lossless compression.
    startDate: 2013-12
    endDate: 2014-12
    highlights: 
      - Build an algorithm for artist to detect if their music was violating 
        copy right infringement laws
        
      - Successfully won Techcrunch Disrupt

      - Optimized an algorithm that holds the current world record for 
        Weisman Scores
         
volunteer:
  - organization: CoderDojo
    position: Teacher
    url: http://coderdojo.example.com/
    startDate: 2012-01
    endDate: 2013-01
    highlights:
      - Awarded 'Teacher of the Month'

education:
  - institution: University of Oklahoma
    url: https://www.ou.edu/
    area: Information Technology
    score: 'Score: 4.0'
    startDate: 2011-06
    endDate: 2014-01
    courses:
      - DB1101 - Basic SQL
      - CS2011 - Java Introduction

awards:
  - title: Digital Compression Pioneer Award
    date: 2014-11
    awarder: Techcrunch
    summary: There is no spoon.

publications:
  - name: Video compression for 3d media
    publisher: Hooli
    releaseDate: 2014-10
    url: http://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)
    summary: 
      Innovative middle-out compression algorithm that changes 
      the way we store data. 

skills:
  - name: Web Development
    keywords: ["HTML", "CSS", "Javascript"]
    
  - name: Compression
    keywords: ["Mpeg", "MP4", "GIF"]

projects: 
  - name: Miss Direction
    description: A mapping engine that misguides you
    startDate: 2016-08
    endDate: 2016-08
    url: missdirection.example.com
    highlights:
      - Won award at AIHacks 2016
      
      - Built by all women team of newbie programmers
      
      - Using modern technologies such as GoogleMaps, Chrome Extension 
        and Javascript
`;
