import { Document, TextRun, Paragraph, HeadingLevel, AlignmentType,UnderlineType } from "docx";

export default function gerarDoc(values){
    const nameParagraph = new Paragraph({
        children: [
            new TextRun({
                text: values.nome,
            }),
            new TextRun({
                text: values.cargo,
                size: 26,
                break: 1
            })
        ],
        heading: HeadingLevel.HEADING_2,
        alignment: AlignmentType.LEFT,
    })

    const doc = new Document({
        title: "resume",
        styles: {
            default: {
                heading2: {
                    run: {
                        font: "Arial",
                        size: 32,
                        color: "000000"
                    }
                },

                heading3: {
                    run: {
                        font: "Arial",
                        size: 26,
                        color: "000000"
                    }
                }
            }
        },   
        sections: [
            {
                children: [nameParagraph]
            }
        ]
    })

    return doc
}