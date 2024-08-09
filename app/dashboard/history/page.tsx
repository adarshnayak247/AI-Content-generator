"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import moment from "moment";
import Modal from 'react-modal';

const HistoryPage = () => {
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any | null>(null);

  useEffect(() => {
    const fetchRecords = async () => {
      setLoading(true);
      try {
        // Fetch records from database
        const results = await db.select().from(AIOutput);
        setRecords(results);
      } catch (error) {
        console.error("Error fetching records:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  const openModal = (record: any) => {
    setSelectedRecord(record);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRecord(null);
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">History</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '20%' }}>Form Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '30%', maxWidth: '300px' }}>AI Response</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '20%' }}>Template Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '15%' }}>Created By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" style={{ width: '15%' }}>Created At</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ width: '20%' }}>{record.FormData}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ width: '30%', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    <button onClick={() => openModal(record)}>{record.aiResponse}</button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ width: '20%' }}>{record.templateslug}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ width: '15%' }}>{record.createdBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ width: '15%' }}>{moment(record.createdAt, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for showing full data */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Full Data"
        className="fixed inset-0 bg-white p-6 m-auto max-w-4xl rounded-lg shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <h2 className="text-xl font-bold mb-4">Full Data</h2>
        {selectedRecord && (
          <div>
            <p><strong>Form Data:</strong> {selectedRecord.FormData}</p>
            <p><strong>AI Response:</strong> {selectedRecord.aiResponse}</p>
            <p><strong>Template Slug:</strong> {selectedRecord.templateslug}</p>
            <p><strong>Created By:</strong> {selectedRecord.createdBy}</p>
            <p><strong>Created At:</strong> {moment(selectedRecord.createdAt, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')}</p>
          </div>
        )}
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
      </Modal>
    </div>
  );
};

export default HistoryPage;
