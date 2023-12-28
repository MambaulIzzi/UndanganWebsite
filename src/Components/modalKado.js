import { faClose, faCopy, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import React from 'react'
import Swal from 'sweetalert2'

export default function modalKado({ visible, onClose }) {

    const copyalamat = () => {
        navigator.clipboard.writeText('Jl. Tribrata Hangtuah Duri, Kec. Mandau. Bengkalis-Riau ');
        Swal.fire({
            text: 'Berhasil Salin Alamat!',
            icon: 'success',
            confirmButtonColor: '#f5a525',
            confirmButtonText: 'OKE',
          })
    }

    const wawanita = () => {
        window.open('https://api.whatsapp.com/send?phone=6285365650371', "_blank" );
    }

    return (
        <>
            <React.Fragment>
                <Modal
                    show={visible}
                    onClose={onClose}
                    position="center"
                >
                    <Modal.Body className='bg-[#477aa9] rounded-lg border-0 shadow-lg'>
                        <div className='flex justify-end'>
                            <button onClick={onClose} className='py-3 px-2 duration-300 text-2xl hover:scale-110 font-bold text-white'>
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>
                        <div className="space-y-6">
                            <div className='text-5xl custom-font-2 text-center text-white'>Kirim Kado</div>
                            <div className='grid grid-cols-1 gap-4 mb-4'>
                                <div>
                                    <div className='bg-[#dde0e9] rounded-lg py-3 mb-2'>
                                        <h1 className='text-center font-medium text-[#477aa9] text-xl'>
                                        Jl. Tribrata Hangtuah
Duri, Kec. Mandau. Bengkalis-Riau 
                                        </h1>
                                    </div>
                                    <button onClick={() => {copyalamat()}} className='py-3 bg-gray-500 rounded-lg w-full mb-2 text-white hover:bg-gray-700'>
                                        <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                        Salin Alamat Mempelai
                                    </button>
                                    <button onClick={() => {wawanita()}} className='py-3 bg-green-600 rounded-lg w-full mb-4 text-white hover:bg-green-700'>
                                        <FontAwesomeIcon icon={faMessage} className="mr-2" />
                                        Konfirmasi via Whatsapp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        </>
    )
}
