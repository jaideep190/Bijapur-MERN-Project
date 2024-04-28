// frontend/src/screens/Dashboard.jsx

import React, { useState } from 'react';
import FormContainer from '../components/FormContainer';
import { useGetUserFormStatusMutation } from '../slices/usersApiSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Dashboard.css';
import Loader from '../components/Loader';

function Dashboard() {
  const [porNumber, setPorNumber] = useState('');
  const [formStatus, setFormStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [getUserFormStatus] = useGetUserFormStatusMutation();

  const handleGetDetails = async () => {
    if (!porNumber.trim()) {
      toast.error('Enter POR Number');
      return;
    }

    setLoading(true);
    try {
      const { data } = await getUserFormStatus({ porNumber });
      if (!data) {
        toast.error("POR Number Doesn't Exist");
        return;
      }
      
      const defaultFormStatus = {
        porNumber,
        porForm: 0,
        japtinamaForm: 0,
        rajinamaForm: 0,
        girafthariPanchnamaForm: 0,
        supurdnamaForm: 0,
        ...data
      };

      setFormStatus(defaultFormStatus);
    } catch (error) {
      console.log(error);
      toast.error('Failed to fetch form status');
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <h1 className="form-heading">Case Forms Status</h1>
      <input
        type="text"
        placeholder="Enter POR Number"
        value={porNumber}
        onChange={(e) => setPorNumber(e.target.value)}
      />
      <button onClick={handleGetDetails} disabled={loading}>
        {loading ? <Loader/> : 'Get Details'}
      </button>
      {formStatus && (
        <div className="form-details">
          {Object.entries(formStatus).map(([key, value]) => {
            if (key !== '_id' && key !== '__v') {
              return (
                <p key={key}>
                  <span className="form-field">{key === 'porNumber' ? value : key}:</span>{' '}
                  {key !== 'porNumber' ? (
                    value ? (
                      <span className="green-tick">&#10004;</span>
                    ) : (
                      <span className="red-cross">&#10060;</span>
                    )
                  ) : null}
                </p>
              );
            }
            return null;
          })}
        </div>
      )}
    </FormContainer>
  );
}

export default Dashboard;
