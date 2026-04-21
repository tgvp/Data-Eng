db = db.getSiblingDB("university_mongo");

db.students.drop();

db.students.insertMany([
  {
    student_number: "S2024001",
    full_name: "Alice Johnson",
    email: "alice.johnson@student.edu",
    status: "active",
    department: {
      name: "Computer Science",
      building: "Engineering Building"
    },
    enrolled_courses: [
      {
        code: "CS101",
        title: "Programming Fundamentals",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      },
      {
        code: "CS102",
        title: "Database Systems",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      }
    ]
  },
  {
    student_number: "S2024002",
    full_name: "Bruno Silva",
    email: "bruno.silva@student.edu",
    status: "active",
    department: {
      name: "Data Science",
      building: "Innovation Center"
    },
    enrolled_courses: [
      {
        code: "DS101",
        title: "Introduction to Data Science",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      },
      {
        code: "MA201",
        title: "Statistics",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      }
    ]
  },
  {
    student_number: "S2024003",
    full_name: "Carla Mendes",
    email: "carla.mendes@student.edu",
    status: "active",
    department: {
      name: "Data Science",
      building: "Innovation Center"
    },
    enrolled_courses: [
      {
        code: "DS101",
        title: "Introduction to Data Science",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      }
    ]
  },
  {
    student_number: "S2024004",
    full_name: "David Pereira",
    email: "david.pereira@student.edu",
    status: "active",
    department: {
      name: "Computer Science",
      building: "Engineering Building"
    },
    enrolled_courses: [
      {
        code: "CS101",
        title: "Programming Fundamentals",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      },
      {
        code: "MA101",
        title: "Calculus I",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      }
    ]
  },
  {
    student_number: "S2024005",
    full_name: "Eva Costa",
    email: "eva.costa@student.edu",
    status: "active",
    department: {
      name: "Mathematics",
      building: "Science Hall"
    },
    enrolled_courses: [
      {
        code: "MA101",
        title: "Calculus I",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      },
      {
        code: "MA201",
        title: "Statistics",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      }
    ]
  },
  {
    student_number: "S2024007",
    full_name: "Gabriela Sousa",
    email: "gabriela.sousa@student.edu",
    status: "active",
    department: {
      name: "Digital Media",
      building: "Arts Block"
    },
    enrolled_courses: [
      {
        code: "DM101",
        title: "Digital Design",
        semester: "Fall",
        year: 2025,
        final_status: "enrolled"
      }
    ]
  },
  {
    student_number: "S2024008",
    full_name: "Hugo Ferreira",
    email: "hugo.ferreira@student.edu",
    status: "inactive",
    department: {
      name: "Computer Science",
      building: "Engineering Building"
    },
    enrolled_courses: [
      {
        code: "CS101",
        title: "Programming Fundamentals",
        semester: "Fall",
        year: 2025,
        final_status: "failed"
      }
    ]
  },
  {
    student_number: "S2024010",
    full_name: "Joao Cardoso",
    email: "joao.cardoso@student.edu",
    status: "suspended",
    department: {
      name: "Business",
      building: "Main Building"
    },
    enrolled_courses: []
  }
]);

db.students.createIndex({ student_number: 1 }, { unique: true });
db.students.createIndex({ status: 1 });
db.students.createIndex({ "department.name": 1 });
db.students.createIndex({ "enrolled_courses.code": 1 });

print("Database university_mongo prepared.");
print("Collection students loaded with " + db.students.countDocuments() + " documents.");
