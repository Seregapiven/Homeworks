const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
]

calculateStudentAverageMark(students[2]);
calculateGroupAverageMark(students);

function calculateStudentAverageMark(val) { 
  return val.marks.reduce((acc, currentValue) => acc + currentValue) / val.marks.length; 
}
function calculateGroupAverageMark(val) {
  const allMarks = val.reduce((acc, currentValue) => acc.concat(currentValue.marks), []);
  const allAverageMarks = allMarks.reduce((acc, currentValue) => acc + currentValue) / allMarks.length;
  return allAverageMarks;
}