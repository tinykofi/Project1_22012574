--Effah-Asare Kofi 
--22012574
--Project 1

-- Student Table
CREATE TABLE
IF NOT EXISTS student
(
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR
(50),
    last_name VARCHAR
(50),
    email VARCHAR
(100) UNIQUE,
    phone VARCHAR
(15),
    address TEXT
);

-- Fees Table
CREATE TABLE
IF NOT EXISTS fees_payment
(
    payment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student
(student_id),
    amount_paid INT,
    date_paid DATE DEFAULT CURRENT_DATE
);

-- Courses Table
CREATE TABLE
IF NOT EXISTS course
(
    course_id SERIAL PRIMARY KEY,
    course_code VARCHAR
(10) UNIQUE,
    course_title VARCHAR
(100),
    credit_hours INT
);

-- Enrollment Table
CREATE TABLE
IF NOT EXISTS enrollment
(
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES student
(student_id),
    course_id INT REFERENCES course
(course_id),
	date_enrolled DATE DEFAULT CURRENT_DATE,
    semester VARCHAR
(10)
);

-- Lecturer Table
CREATE TABLE
IF NOT EXISTS lecturer
(
    lecturer_id SERIAL PRIMARY KEY,
    first_name VARCHAR
(50),
    last_name VARCHAR
(50),
    email VARCHAR
(100) UNIQUE
);

-- TA Table
CREATE TABLE
IF NOT EXISTS ta
(
    ta_id SERIAL PRIMARY KEY,
    first_name VARCHAR
(50),
    last_name VARCHAR
(50),
    email VARCHAR
(100) UNIQUE
);

-- Lecturer _Course 
CREATE TABLE
IF NOT EXISTS lecturer_course
(
    assignment_id SERIAL PRIMARY KEY,
    lecturer_id INT REFERENCES lecturer
(lecturer_id),
    course_id INT REFERENCES course
(course_id)
);

-- Lecturer _ TA table
CREATE TABLE
IF NOT EXISTS lecturer_ta
(
    assignment_id SERIAL PRIMARY KEY,
    lecturer_id INT REFERENCES lecturer
(lecturer_id),
    ta_id INT REFERENCES ta
(ta_id)
);

-- Insert Students
INSERT INTO student
    (first_name, last_name, email, phone, address)
VALUES
    ('Kofi', 'Mensah', 'kofi.mensah@example.com', '0551002003', 'Accra'),
    ('Ama', 'Osei', 'ama.osei@example.com', '0244001100', 'Kumasi');

-- Insert Courses
INSERT INTO course
    (course_code, course_title, credit_hours)
VALUES
    ('CPEN101', 'Introduction to Programming', 3),
    ('CPEN206', 'Linear Circuits', 4),
    ('CPEN208', 'Software Engineering', '3');

-- Insert Lecturers
INSERT INTO lecturer
    (first_name, last_name, email)
VALUES
    ('Dr.', 'Asare', 'asare@example.edu'),
    ('Mrs.', 'Boateng', 'boateng@example.edu'),
    ('Dr.', 'Ampere', 'ampere@example.edu');

-- Insert TAs
INSERT INTO ta
    (first_name, last_name, email)
VALUES
    ('Kwame', 'Darko', 'kwame.darko@example.edu'),
    ('Akua', 'Owusu', 'akua.owusu@example.edu');

-- Insert Fees Payments
INSERT INTO fees_payment
    (student_id, amount_paid, date_paid)
VALUES
    (1, 1000.00, '2025-01-10'),
    (1, 500.00, '2025-02-15'),
    (2, 1500.00, '2025-02-15');

-- Enrollment
INSERT INTO enrollment
    (student_id, course_id,date_enrolled, semester)
VALUES
    (1, 1, '2025-01-10', 'SEM1'),
    (1, 2, '2025-02-15' , 'SEM1'),
    (2, 1, '2025-02-15', 'SEM1');

-- Lecturer-Course Assignments
INSERT INTO lecturer_course
    (lecturer_id, course_id)
VALUES
    (1, 1),
    (2, 2),
    (3, 3);

-- Lecturer-TA Assignments
INSERT INTO lecturer_ta
    (lecturer_id, ta_id)
VALUES
    (1, 1),
    (2, 2);

--The join below shows the courses each lecturer is in charge of;

-- SELECT
--   course.course_id,
--   course.course_code,
--   course.course_title,
--   lecturer.lecturer_id,
--   lecturer.first_name,
--   lecturer.last_name
-- FROM lecturer_course
-- JOIN course ON lecturer_course.course_id = course.course_id
-- JOIN lecturer ON lecturer_course.lecturer_id = lecturer.lecturer_id;

CREATE OR REPLACE FUNCTION calculate_outstanding_fees
()
RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_agg(row_to_json(t))
    INTO result
    FROM (
        SELECT
            s.student_id,
            s.first_name || ' ' || s.last_name AS full_name,
            2000 - COALESCE(SUM(f.amount_paid), 0) AS outstanding_fee
        FROM student s
            LEFT JOIN fees_payment f ON s.student_id = f.student_id
        GROUP BY s.student_id
    ) t;

    RETURN result;
END;
$$ LANGUAGE plpgsql;



