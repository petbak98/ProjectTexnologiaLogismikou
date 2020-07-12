import React from 'react';

export default function Report({ report }) {
  console.log(report);
  return <div>{report.reportId}</div>;
}
