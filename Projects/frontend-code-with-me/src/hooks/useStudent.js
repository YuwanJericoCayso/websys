import axios from 'axios';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

export function useStudent() {
  const [students, setStudents] = useState([]);
  const BASE_URL = 'http://localhost:3001';

  async function getAllStudents() {
    const students = await axios.get(`${BASE_URL}/students`);

    setStudents(students.data);
  }

  async function getAllStudentGraduationInfo() {
    const students = await axios.get(`${BASE_URL}/students/v2/`);

    setStudents(students.data);
  }

  async function createStudent(studentData) {
    const response = await axios.post(`${BASE_URL}/students/v3`, studentData);
    setStudents(prev => [...prev, response.data]);
    return response.data;
  }

  async function deleteStudent() {
    const response = await axios.delete(`${BASE_URL}`);

    setStudents(prev => {
      return prev.filter(student => student.id !== response.data.id);
    });
  }

  return {
    students,
    getAllStudents,
    getAllStudentGraduationInfo,
    createStudent,
    deleteStudent,
  };
}