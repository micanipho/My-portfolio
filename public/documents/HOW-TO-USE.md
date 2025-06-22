# How to Use the Documents Feature

## 📋 Current Available Documents

### ✅ Working Documents:
1. **Software Developer Resume (HTML)** - Formatted HTML version
   - File: `resume.html`
   - Viewable in browser with styling
   - Can be printed to PDF from browser

2. **Software Developer Resume (Text)** - Plain text version
   - File: `sample-resume.txt`
   - Simple text format for easy copying

## 🔧 How to View/Download Documents

### From the Documents Page:
1. Go to `http://localhost:3001/documents`
2. Find the document you want to view
3. Click the **👁️ View** button (blue) to open in new tab
4. Click the **⬇️ Download** button (green) to download

### From Navigation:
- **Main Menu**: Click "Documents" in the header
- **Home Page**: Click "View Documents" button
- **About Page**: Click "View Resume & Docs" button

## 📁 Adding Your Own Documents

### Step 1: Add Files
Place your documents in the `public/documents/` folder:
```
public/documents/
├── your-resume.pdf
├── certificate.pdf
├── project-docs.pdf
└── presentation.pptx
```

### Step 2: Update Document Data
Edit `pages/documents.tsx` and add your document to the `sampleDocuments` array:

```javascript
{
  id: 'unique-id',
  title: 'Your Document Title',
  description: 'Brief description of the document',
  category: 'resume', // or 'certificates', 'academic', 'projects', 'presentations'
  fileType: 'pdf', // or 'doc', 'docx', 'ppt', 'pptx', 'txt'
  fileName: 'your-file.pdf',
  fileSize: '1.2 MB',
  uploadDate: '2024-01-15',
  downloadUrl: '/documents/your-file.pdf',
  tags: ['tag1', 'tag2', 'tag3'],
  featured: true // or false
}
```

## 🎨 Document Categories

- **resume**: CV/Resume documents
- **certificates**: Certificates and awards
- **academic**: Academic papers and assignments
- **projects**: Project documentation
- **presentations**: Presentation files

## 📄 Supported File Types

- **PDF** (.pdf) - Best for resumes and formal documents
- **Word** (.doc, .docx) - Editable documents
- **PowerPoint** (.ppt, .pptx) - Presentations
- **Text** (.txt) - Plain text files
- **HTML** (.html) - Web-formatted documents

## 🔍 Features Available

- ✅ **Search**: Search by title, description, or tags
- ✅ **Filter by Category**: Filter documents by type
- ✅ **Featured Toggle**: Show only featured documents
- ✅ **View in Browser**: Open documents in new tab
- ✅ **Download**: Direct download functionality
- ✅ **Responsive Design**: Works on mobile and desktop

## 💡 Tips

1. **For Resumes**: Use PDF format for best compatibility
2. **File Sizes**: Keep files under 5MB for fast loading
3. **File Names**: Use descriptive, web-friendly names (no spaces)
4. **Featured Documents**: Mark important documents as featured
5. **Tags**: Use relevant tags for better searchability

## 🚀 Next Steps

1. Replace sample documents with your actual files
2. Update the document metadata in the code
3. Add more categories if needed
4. Customize the styling to match your preferences

---

**Note**: This is a demo setup. In production, you might want to use a content management system or database for document management.
