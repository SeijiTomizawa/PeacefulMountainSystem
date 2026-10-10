export interface Member {
  id: string;
  slug: string;
  data: {
    name: string;
    member_id: string;
    photo_url?: string;
  };
}

export const members: Member[] = [
  { id: "tz001",   slug: "tz001",   data: { name: "WARREN HARRIS",                    member_id: "TZ001"   } },
  { id: "tz002",   slug: "tz002",   data: { name: "RENA KEY",                          member_id: "TZ002"   } },
  { id: "tz003",   slug: "tz003",   data: { name: "RODNEY CHOE",                       member_id: "TZ003"   } },
  { id: "tz004",   slug: "tz004",   data: { name: "JADA-LOVE ROPER",                   member_id: "TZ004"   } },
  { id: "tz005",   slug: "tz005",   data: { name: "SHERI EDWARDS",                     member_id: "TZ005"   } },
  { id: "tz006",   slug: "tz006",   data: { name: "RONICE EDWARDS",                    member_id: "TZ006"   } },
  { id: "tz007",   slug: "tz007",   data: { name: "PASQUALE ALBINO",                   member_id: "TZ007"   } },
  { id: "tz008",   slug: "tz008",   data: { name: "KEITH ALLEN",                       member_id: "TZ008"   } },
  { id: "tz008-b", slug: "tz008-b", data: { name: "LOGAN J. WHITEHILL",                member_id: "TZ008"   } },
  { id: "tz009",   slug: "tz009",   data: { name: "MICHAEL BURRIEL",                   member_id: "TZ009"   } },
  { id: "tz0010",  slug: "tz0010",  data: { name: "JIM FAIRCHILD",                     member_id: "TZ0010"  } },
  { id: "tz0011",  slug: "tz0011",  data: { name: "TOM BURRIEL",                       member_id: "TZ0011"  } },
  { id: "tz0012",  slug: "tz0012",  data: { name: "TOMMY BURRIEL",                     member_id: "TZ0012"  } },
  { id: "tz0013",  slug: "tz0013",  data: { name: "RONALD V. LEWIS",                   member_id: "TZ0013"  } },
  { id: "tz0014",  slug: "tz0014",  data: { name: "STACY ROSIER",                      member_id: "TZ0014"  } },
  { id: "tz0015",  slug: "tz0015",  data: { name: "HANAKO MATAYOSHI",                  member_id: "TZ0015"  } },
  { id: "tz0016",  slug: "tz0016",  data: { name: "RAY WILSON",                        member_id: "TZ0016"  } },
  { id: "tz0017",  slug: "tz0017",  data: { name: "ISSAM SAITO",                       member_id: "TZ0017"  } },
  { id: "tz0018",  slug: "tz0018",  data: { name: "RON DURAN",                         member_id: "TZ0018"  } },
  { id: "tz0019",  slug: "tz0019",  data: { name: "MASASHI KAKIMOTO",                  member_id: "TZ0019"  } },
  { id: "tz0020",  slug: "tz0020",  data: { name: "SIMONE NAPOLEONE GIAMPIETRO",        member_id: "TZ0020"  } },
  { id: "tz0021",  slug: "tz0021",  data: { name: "LUCA BAGNOLI",                      member_id: "TZ0021"  } },
  { id: "tz0022",  slug: "tz0022",  data: { name: "ZAMEER SAIFI",                      member_id: "TZ0022"  } },
  { id: "tz0023",  slug: "tz0023",  data: { name: "SATOSHI NAGATA",                    member_id: "TZ0023"  } },
  { id: "tz0025",  slug: "tz0025",  data: { name: "SARA DE AMICIS",                    member_id: "TZ0025"  } },
  { id: "tz0026",  slug: "tz0026",  data: { name: "PRASAD WICKRAMA SINGHE",             member_id: "TZ0026"  } },
  { id: "tz0027",  slug: "tz0027",  data: { name: "SEIJI TOMIZAWA",                    member_id: "TZ0027"  } },
  { id: "tz0028",  slug: "tz0028",  data: { name: "YUU YOSHIYAMA",                     member_id: "TZ0028"  } },
  { id: "tz0029",  slug: "tz0029",  data: { name: "ANTHONY PACENSKI",                  member_id: "TZ0029"  } },
  { id: "tz0030",  slug: "tz0030",  data: { name: "FUGI OKA YU SAKU",                  member_id: "TZ0030"  } },
  { id: "tz0031",  slug: "tz0031",  data: { name: "FARLEY MANN",                       member_id: "TZ0031"  } },
  { id: "tz0032",  slug: "tz0032",  data: { name: "SHAWN FLANAGAN",                    member_id: "TZ0032"  } },
  { id: "tz0033",  slug: "tz0033",  data: { name: "KYLE FLANAGAN",                     member_id: "TZ0033"  } },
  { id: "tz0034",  slug: "tz0034",  data: { name: "TONY DIAZ",                         member_id: "TZ0034"  } },
  { id: "tz0035",  slug: "tz0035",  data: { name: "SAMMY SAMPSON",                     member_id: "TZ0035"  } },
  { id: "tz0036",  slug: "tz0036",  data: { name: "GREGORY MIDDLETON",                 member_id: "TZ0036"  } },
  { id: "tz0037",  slug: "tz0037",  data: { name: "PHILIP KIYOSHI GIGNAC",             member_id: "TZ0037"  } },
  { id: "tz0038",  slug: "tz0038",  data: { name: "SIMONE MIDDLETON",                  member_id: "TZ0038"  } },
  { id: "tz0039",  slug: "tz0039",  data: { name: "EMERY MULDROW",                     member_id: "TZ0039"  } },
  { id: "tz0041",  slug: "tz0041",  data: { name: "FRANCESCA DE MARCO",                member_id: "TZ0041"  } },
  { id: "tz0042",  slug: "tz0042",  data: { name: "BATUNDA GILLIMORE",                 member_id: "TZ0042"  } },
  { id: "tz0043",  slug: "tz0043",  data: { name: "SEIJI TOMIZAWA",                    member_id: "TZ0043"  } },
  { id: "tz0045",  slug: "tz0045",  data: { name: "CHRISTOPHER M. PIATKOWSKI",         member_id: "TZ0045"  } },
  { id: "tz0046",  slug: "tz0046",  data: { name: "DAESHAWN PERRY",                    member_id: "TZ0046"  } },
  { id: "tz0047",  slug: "tz0047",  data: { name: "RAFAEL MELENDEZ",                   member_id: "TZ0047"  } },
  { id: "tz0048",  slug: "tz0048",  data: { name: "TAKAHIRO MINAKUCHI",                member_id: "TZ0048"  } },
  { id: "tz0049",  slug: "tz0049",  data: { name: "CHRISTIAN HALBAL",                  member_id: "TZ0049"  } },
  { id: "tz0050",  slug: "tz0050",  data: { name: "RICHARD SCHAFER",                   member_id: "TZ0050"  } },
  { id: "tz0051",  slug: "tz0051",  data: { name: "RAFAEL MELANDEZ",                   member_id: "TZ0051"  } },
  { id: "tz0052",  slug: "tz0052",  data: { name: "PERRY BATUNDA GALLEMORE",           member_id: "TZ0052"  } },
  { id: "tz0053",  slug: "tz0053",  data: { name: "ANTONIO CKARKE",                    member_id: "TZ0053"  } },
];
