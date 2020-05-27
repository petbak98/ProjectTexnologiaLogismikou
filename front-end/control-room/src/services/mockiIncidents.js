export const incidents = [
  {
    incidentId: 1,
    coordinatorId: 1,
    coordinatorName: 'john',
    title: 'Listeia',
    authorityId: 1,
    importanceId: 1,
    latitude: 0.0,
    longitude: 0.0,
    number: '5',
    postalCode: '15234',
    region: 'Attiki',
    street: 'Sapfous',
    notes: 'Simeiosh',
    statusId: 1,
    callerFirstName: 'nick',
    callerLastName: 'pap',
    callerNationalId: 'greek',
    callerPhone: '2100000000',
    creationTimestamp: null,
    lastUpdate: '2020-05-23T21:03:28.000+0000',
    reports: [
      {
        reportId: 1,
        content: 'Nothing happened',
        userId: 1,
        userName: 'john',
        incidentId: 1,
        lastUpdate: '2020-05-23T21:03:28.000+0000'
      },
      {
        reportId: 2,
        content: 'Panic everywhere',
        userId: 1,
        userName: 'john',
        incidentId: 1,
        lastUpdate: '2020-05-23T21:03:28.000+0000'
      }
    ],
    receivers: [
      {
        id: 1,
        username: 'john',
        password: '12345',
        firstName: 'giannis',
        lastName: 'mpampinou',
        latitude: 0.0,
        longitude: 0.0,
        authorityId: 1
      }
    ]
  },
  {
    incidentId: 2,
    coordinatorId: 1,
    coordinatorName: 'john',
    title: 'FWTIA',
    authorityId: 2,
    importanceId: 1,
    latitude: 0.0,
    longitude: 0.0,
    number: '6',
    postalCode: '15234',
    region: 'Attiki',
    street: 'Sapfous',
    notes: 'nope note',
    statusId: 2,
    callerFirstName: 'kostas',
    callerLastName: 'mix',
    callerNationalId: 'greek',
    callerPhone: '2100000000',
    creationTimestamp: null,
    lastUpdate: '2020-05-23T21:03:28.000+0000',
    reports: [],
    receivers: [
      {
        id: 1,
        username: 'john',
        password: '12345',
        firstName: 'giannis',
        lastName: 'mpampinou',
        latitude: 0.0,
        longitude: 0.0,
        authorityId: 1
      }
    ]
  }
];
