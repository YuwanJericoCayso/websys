import { useStudent } from './hooks/useStudent';
import { useGraduate } from './hooks/useGraduate';
import { useState } from 'react';

function App() {
  const studentsService = useStudent();
  const graduatesService = useGraduate();
  const [showForm,setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', 
    middleName: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    studentsService.createStudent(formData);
    setShowForm(false);
  }

  function zeroPad(num, length = 3) {
    return String(num).padStart(length, '0');
  }

  return (
    <div className="flex p-2 gap-2">
      <div className="flex-1 p-4 border-2 border-solid border-slate-100">
        <button
          className="py-1 px-4 rounded text-white bg-rose-500"
          onClick={studentsService.getAllStudents}>
          Load Students
        </button>

        <button
          className="ml-4 py-1 px-4 rounded text-white bg-rose-500"
          onClick={studentsService.getAllStudentGraduationInfo}>
          Load Students with Graduation
        </button>

        <button
          className="ml-4 py-1 px-4 rounded text-white bg-rose-500"
          onClick={() => setShowForm(!showForm)}>
          Create Student
        </button>

        {showForm && (
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="First Name" 
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Middle Name" 
              value={formData.middleName}
              onChange={(e) => setFormData({...formData, middleName: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
            <button type="submit">Submit</button>
          </form>
        )}

        <div className="mt-6">
          {studentsService.students.map(student => (
            <div className="mb-2">
              <div>
                <span className="font-bold">id: </span>
                {student.id}
              </div>
              <div>
                <span className="font-bold">name: </span>
                {student.lastName}, {student.firstName} {student.middleName}
              </div>
              
              {student.graduates &&(
                <div className="ml-4">
                  {student.graduates.map(graduate => (
                    <div>
                      <div>
                        <span className="font-bold">Graduate ID: </span>
                        {graduate.id}
                      </div>
                      <div>
                        <span className="font-bold">rog: </span>
                        {zeroPad(graduate.rogNo)}
                      </div>

                      {graduate.programs &&(
                        <div className="ml-4 mt-2">
                          {graduate.programs.map(program => (
                            <div>
                              <span className="font-bold">Program ID: </span> {program.id} <br />
                              <span className="font-bold">Program name: </span> {program.name} <br />
                              <span className="font-bold">Program code: </span> {program.code}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 p-4 border-2 border-solid border-slate-100">
        <button
          className="py-1 px-4 rounded text-white bg-rose-500"
          onClick={graduatesService.getAllGraduates}>
          Load Graduates
        </button>

        <button
          className="ml-4 py-1 px-4 rounded text-white bg-rose-500"
           onClick={graduatesService.getAllGraduatesWithStudentInfo}>
          Load Graduates with Student Info
        </button>

        <div className="mt-6">
          {graduatesService.graduates.map(graduate => (
            <div className="mb-2">
              <div>
                <span className="font-bold">id: </span>
                {graduate.id}
              </div>

              <div>
                <span className="font-bold">rog: </span>
                {zeroPad(graduate.rogNo)}
              </div>

              {/* Displays student info if student info is loaded */}
              {graduate.student && (
                <div className="ml-4">
                  <div>
                    <span className="font-bold">student id: </span>
                    {graduate.student.id}
                  </div>
                  <div>
                    <span className="font-bold">student name: </span>
                    {graduate.student.lastName}, {graduate.student.firstName} {graduate.student.middleName}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
