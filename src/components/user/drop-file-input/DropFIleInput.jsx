import { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import '../../user/drop-file-input/drop-file-input.css'

import { ImageConfig } from '../../../assets/config/ImageConfig'
import uploadImg from '../../../assets/images/cloud-upload-regular-240.png'

function humanReadableSize(bytes, decimalPlaces = 2) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB']
  let i = 0

  while (bytes >= 1024) {
    bytes /= 1024
    ++i
  }

  return `${bytes.toFixed(decimalPlaces)}${units[i]}`
}

const DropFileInput = (props) => {
  const wrapperRef = useRef(null)

  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = (e) => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [newFile]
      setFileList(updatedList)
      props.onFileChange(updatedList)
    }
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className='drop-file-input flex items-center justify-center'
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className='drop-file-input__label'>
          <img src={uploadImg} className='mx-auto' alt='' />
          <p>Drag & Drop your resume here</p>
        </div>
        <input type='file' value='' onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className='drop-file-preview'>
          <p className='drop-file-preview__title ms-10'>Ready to upload</p>
          {fileList.map((item, index) => (
            <div key={index} className='drop-file-preview__item'>
              <img
                src={
                  ImageConfig[item.type.split('/')[1]] ||
                  ImageConfig[item.name.split('.').pop()] ||
                  ImageConfig['default']
                }
                alt=''
              />
              <div className='drop-file-preview__item__info'>
                <p>{item.name}</p>
                <p>{humanReadableSize(item.size)}</p>
              </div>
              <span className='drop-file-preview__item__del' onClick={() => fileRemove(item)}>
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
}

export default DropFileInput
