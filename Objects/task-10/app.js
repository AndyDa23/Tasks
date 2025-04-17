const students = [
    { name: "Алиса", nota: [8, 10, 7, 5, 4] },
    { name: "Борис", nota: [3, 4, 2, 5, 6] },
    { name: "Кирилл", nota: [9, 10, 8, 9, 7] },
    { name: "Дмитрий", nota: [6, 5, 4, 7, 5] },
    { name: "Екатерина", nota: [10, 9, 10, 10, 9] }
  ];
  
  // Функция для вычисления средней оценки
  function getAverage(nota) {
    return (nota.reduce((sum, mark) => sum + mark, 0) / nota.length).toFixed(1);
  }
  
  // Рассчитать среднюю оценку для каждого ученика
  students.forEach(student => {
    student.average = parseFloat(getAverage(student.nota));
    console.log(`${student.name}: ${student.average}`);
  });
  
  // Найти студентов со средней оценкой < 5
  const belowAverage = students.filter(student => student.average < 5);
  console.log("Студенты со средней оценкой < 5:", belowAverage.map(s => `${s.name} (${s.average})`).join(", "));
  
  // Найти студентов с самым высоким и самым низким средним баллом
  const highest = students.reduce((max, student) => student.average > max.average ? student : max, students[0]);
  const lowest = students.reduce((min, student) => student.average < min.average ? student : min, students[0]);
  console.log(`Самая высокая средняя оценка: ${highest.name} (${highest.average})`);
  console.log(`Самая низкая средняя оценка: ${lowest.name} (${lowest.average})`);
  
  // Сортировать студентов по среднему баллу в порядке убывания
  const sortedStudents = [...students].sort((a, b) => b.average - a.average);
  console.log("Список студентов по среднему баллу (по убыванию):");
  sortedStudents.forEach(student => console.log(`${student.name}: ${student.average}`));
  
  // Вычислить среднюю оценку по классу
  const classAverage = parseFloat(getAverage(students.map(student => student.average)));
  console.log(`Средний балл по классу: ${classAverage}`);
  
  // Найти студентов с оценкой выше среднего по классу
  const aboveClassAverage = students.filter(student => student.average > classAverage);
  console.log("Студенты с оценкой выше среднего:", aboveClassAverage.map(s => `${s.name} (${s.average})`).join(", "));
  