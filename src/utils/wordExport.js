import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } from 'docx';
import { saveAs } from 'file-saver';

export const generateWordDocument = async (resumeData) => {
  const { personalInfo, experience, education, skills, themeColor } = resumeData;

  // Convert hex color to RGB for Word
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 37, g: 99, b: 235 };
  };

  const themeRgb = hexToRgb(themeColor);

  const sections = [];

  // Header Section
  sections.push(
    new Paragraph({
      text: personalInfo.fullName,
      heading: HeadingLevel.HEADING_1,
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
      color: `${themeRgb.r.toString(16).padStart(2, '0')}${themeRgb.g.toString(16).padStart(2, '0')}${themeRgb.b.toString(16).padStart(2, '0')}`,
    })
  );

  sections.push(
    new Paragraph({
      text: personalInfo.jobTitle,
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      italics: true,
    })
  );

  // Contact Information
  const contactInfo = [
    personalInfo.email,
    personalInfo.phone,
    personalInfo.location,
    personalInfo.website
  ].filter(Boolean).join(' | ');

  sections.push(
    new Paragraph({
      text: contactInfo,
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    })
  );

  // Professional Summary
  sections.push(
    new Paragraph({
      text: 'PROFESSIONAL SUMMARY',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 200 },
      border: {
        bottom: {
          color: `${themeRgb.r.toString(16).padStart(2, '0')}${themeRgb.g.toString(16).padStart(2, '0')}${themeRgb.b.toString(16).padStart(2, '0')}`,
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  sections.push(
    new Paragraph({
      text: personalInfo.summary,
      spacing: { after: 400 },
    })
  );

  // Work Experience
  sections.push(
    new Paragraph({
      text: 'WORK EXPERIENCE',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 200 },
      border: {
        bottom: {
          color: `${themeRgb.r.toString(16).padStart(2, '0')}${themeRgb.g.toString(16).padStart(2, '0')}${themeRgb.b.toString(16).padStart(2, '0')}`,
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  experience.forEach((exp) => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: exp.role,
            bold: true,
            size: 24,
          }),
        ],
        spacing: { before: 200, after: 100 },
      })
    );

    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: exp.company,
            bold: true,
            color: `${themeRgb.r.toString(16).padStart(2, '0')}${themeRgb.g.toString(16).padStart(2, '0')}${themeRgb.b.toString(16).padStart(2, '0')}`,
          }),
          new TextRun({
            text: ` | ${exp.startDate} - ${exp.endDate}`,
            italics: true,
          }),
        ],
        spacing: { after: 100 },
      })
    );

    sections.push(
      new Paragraph({
        text: exp.description,
        spacing: { after: 300 },
      })
    );
  });

  // Education
  sections.push(
    new Paragraph({
      text: 'EDUCATION',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 200 },
      border: {
        bottom: {
          color: `${themeRgb.r.toString(16).padStart(2, '0')}${themeRgb.g.toString(16).padStart(2, '0')}${themeRgb.b.toString(16).padStart(2, '0')}`,
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  education.forEach((edu) => {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: edu.school,
            bold: true,
            size: 24,
          }),
        ],
        spacing: { before: 200, after: 100 },
      })
    );

    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: edu.degree,
          }),
          new TextRun({
            text: ` | ${edu.year}`,
            italics: true,
          }),
        ],
        spacing: { after: 200 },
      })
    );
  });

  // Skills
  sections.push(
    new Paragraph({
      text: 'SKILLS',
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 200, after: 200 },
      border: {
        bottom: {
          color: `${themeRgb.r.toString(16).padStart(2, '0')}${themeRgb.g.toString(16).padStart(2, '0')}${themeRgb.b.toString(16).padStart(2, '0')}`,
          space: 1,
          style: BorderStyle.SINGLE,
          size: 6,
        },
      },
    })
  );

  sections.push(
    new Paragraph({
      text: skills.join(' • '),
      spacing: { after: 200 },
    })
  );

  // Create the document
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: sections,
      },
    ],
  });

  // Generate and download
  const blob = await Packer.toBlob(doc);
  saveAs(blob, `${personalInfo.fullName.replace(' ', '_')}_Resume.docx`);
};