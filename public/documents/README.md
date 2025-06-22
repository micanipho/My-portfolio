# Documents Directory

This directory contains all the documents that are displayed on the portfolio's documents page.

## File Structure

```
public/documents/
├── README.md                    # This file
├── resume.pdf                   # Current resume/CV
├── certificates/                # Certificates and awards
│   ├── python-certificate.pdf
│   ├── java-certificate.pdf
│   └── web-development-cert.pdf
├── academic/                    # Academic papers and assignments
│   ├── database-design-paper.pdf
│   └── software-engineering-thesis.pdf
├── projects/                    # Project documentation
│   ├── project-1-docs.pdf
│   ├── project-2-presentation.pptx
│   └── api-documentation.pdf
└── presentations/               # Presentation files
    ├── react-development.pptx
    └── database-optimization.pdf
```

## Supported File Types

- **PDF** (.pdf) - Preferred format for documents
- **Word Documents** (.doc, .docx)
- **PowerPoint Presentations** (.ppt, .pptx)
- **Text Files** (.txt)
- **Markdown Files** (.md)

## Adding New Documents

1. Place your document files in the appropriate subdirectory
2. Update the documents data in `pages/documents.tsx`
3. Ensure file names are descriptive and follow naming conventions
4. Keep file sizes reasonable for web delivery

## Security Notes

- All documents in this directory are publicly accessible
- Do not include sensitive or personal information
- Consider watermarking important documents
- Regular backups are recommended

## File Naming Conventions

- Use lowercase letters and hyphens
- Include version dates when applicable
- Examples:
  - `nhlakanipho-resume-2024.pdf`
  - `python-programming-certificate.pdf`
  - `database-project-documentation-v2.pdf`

## Performance Considerations

- Optimize PDF files for web viewing
- Compress large files when possible
- Use appropriate file formats for content type
- Consider file size impact on page load times
