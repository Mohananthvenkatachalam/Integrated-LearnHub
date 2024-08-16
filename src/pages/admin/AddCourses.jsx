import React, { useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { Upload } from 'lucide-react'
import { Label } from '@radix-ui/react-label'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { categories } from '@/service/courseCategories'
import axios from 'axios'

export default function InputForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    url: '',
    level: '',
    price: '',
    category: '',
    brand: '',
    thumbnail: null,
  })

  const [errors, setErrors] = useState({})

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle file input change
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0] // Get the file from the input
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1] // Remove the prefix
        setFormData((prevState) => ({
          ...prevState,
          thumbnail: base64String, // Store only the base64 string without the prefix
        }))
      }
      reader.readAsDataURL(file) // Convert the file to a base64 string
    }
  }

  // Validate form fields
  const validateForm = () => {
    const errors = {}
    if (!formData.title) errors.title = 'Title is required.'
    if (!formData.description) errors.description = 'Description is required.'
    if (!formData.url || !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(formData.url))
      errors.url = 'Invalid URL.'
    if (!formData.level) errors.level = 'Level is required.'
    if (formData.price <= 0) errors.price = 'Price must be a positive number.'
    if (!formData.category) errors.category = 'Category is required.'
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      const user = JSON.parse(localStorage.getItem('user'))
      const dataToSubmit = {
        ...formData,
        brand: user.fullname,
        thumbnail: formData.thumbnail,
      }

      console.log('Data to Submit:', dataToSubmit)

      try {
        axios.post('http://localhost:8080/api/courses/addCourse', dataToSubmit).then((res) => {
          console.log(res.data)
          toast.success('Course added successfully')
        })
      } catch (error) {
        console.error('Error adding course:', error)
        toast.error('Error adding course')
      }

      // Optionally reset the form after submission
      setFormData({
        title: '',
        description: '',
        url: '',
        level: '',
        price: '',
        category: '',
        brand: '',
        thumbnail: null,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex'>
      <div className='ms-10 mt-5 w-1/2 flex-1 space-y-6'>
        <div className='form-item'>
          <Label htmlFor='title'>Title</Label>
          <Input
            id='title'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Title'
            className='mt-3'
          />
          {errors.title && <p className='error-message text-red-500'>{errors.title}</p>}
        </div>
        <div className='form-item'>
          <Label htmlFor='description'>Description</Label>
          <Textarea
            id='description'
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Description'
            className='mt-3 h-40'
          />
          {errors.description && <p className='error-message text-red-500'>{errors.description}</p>}
        </div>
        <div className='form-item'>
          <Label htmlFor='url'>URL</Label>
          <Input
            id='url'
            name='url'
            type='url'
            value={formData.url}
            onChange={handleChange}
            placeholder='URL'
            className='mt-3'
          />
          {errors.url && <p className='error-message text-red-500'>{errors.url}</p>}
        </div>
        <div className='flex w-full items-center justify-between space-x-4'>
          <div className='form-item'>
            <Label htmlFor='level'>Level</Label>
            <Input
              id='level'
              name='level'
              value={formData.level}
              onChange={handleChange}
              placeholder='Level'
              className='mt-3'
            />
            {errors.level && <p className='error-message text-red-500'>{errors.level}</p>}
          </div>
          <div className='form-item'>
            <Label htmlFor='price'>Price</Label>
            <Input
              id='price'
              name='price'
              type='number'
              value={formData.price}
              onChange={handleChange}
              placeholder='Price'
              className='mt-3'
            />
            {errors.price && <p className='error-message text-red-500'>{errors.price}</p>}
          </div>
          <div className='form-item'>
            <Label htmlFor='category'>Category</Label>
            <Select
              id='category'
              name='category'
              value={formData.category}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className='mt-3 w-[280px]'>
                <SelectValue placeholder='Select a category' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category, key) => (
                    <SelectItem value={category} key={key}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.category && <p className='error-message text-red-500'>{errors.category}</p>}
          </div>
        </div>
        <Button className='mt-5' type='submit'>
          Add Course
        </Button>
      </div>
      <div className='m-5 my-auto w-1/2 flex-1 flex-col items-center justify-center space-y-6'>
        <div className='flex items-center justify-center space-x-4'>
          <Label htmlFor='thumbnail' className='cursor-pointer'>
            <div className='flex flex-col items-center justify-center rounded-md border border-black px-4 py-2'>
              <h1>Upload Thumbnail</h1>
              <Upload size='24' />
            </div>
          </Label>
          <input
            id='thumbnail'
            name='thumbnail'
            className='hidden'
            type='file'
            onChange={handlePhotoUpload}
          />
        </div>
        {formData.thumbnail && <p className='text-center text-sm'>Thumbnail uploaded</p>}
      </div>
    </form>
  )
}
