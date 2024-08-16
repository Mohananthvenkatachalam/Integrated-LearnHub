export const categories = [
  'Networking',
  'Business Essentials',
  'Computer Security and Networks',
  'Design and Product',
  'Mobile and Web Development',
  'Music and Art',
  'Software Development',
  'Security',
  'Support and Operations',
  'Cloud Computing',
  'Data Analysis',
  'Machine Learning',
  'Math and Logic',
  'Economics',
  'Research Methods',
  'Leadership and Management',
  'Learning English',
  'Marketing',
  'Algorithms',
  'Probability and Statistics',
  'Physics and Astronomy',
  'History',
  'Environmental Science and Sustainability',
  'Business Strategy',
  'Chemistry',
  // Add more categories as needed
]

export const handlePhotoUpload = (file) => {
  const reader = new FileReader()
  reader.onloadend = () => {
    return reader.result
  }
  reader.readAsDataURL(file)
}
