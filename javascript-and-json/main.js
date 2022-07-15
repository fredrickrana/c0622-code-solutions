var books = [
  {
    isbn: '1234567890',
    title: 'The Fundamentals of CSS',
    author: 'Dr. CSS'
  },
  {
    isbn: '987654321',
    title: 'The Fundamentals of HTML',
    author: 'Dr. HTML'
  },
  {
    isbn: '5432167890',
    title: 'The Fundamentals of JavaScript',
    author: 'Dr. JavaScript'
  }
];

console.log('typeof books:', typeof books);

var stringOfBooks = JSON.stringify(books);
console.log('JSON.stringify(books):', stringOfBooks);
console.log('typeof JSON.stringify(books):', typeof stringOfBooks);

var student = '{"id":"1234567890", "name":"Peter Parker"}';
console.log('student:', student);
console.log('typeof student:', typeof student);

var parseStudent = JSON.parse(student);
console.log('JSON.parse(student):', parseStudent);
console.log('typeof JSON.parse(student):', typeof parseStudent);
