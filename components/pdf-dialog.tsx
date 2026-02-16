'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { FileText, X, Download, Loader2 } from 'lucide-react'

interface PdfDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function PdfDialog({ isOpen, onClose }: PdfDialogProps) {
  const [pdfLoading, setPdfLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen || !mounted) return null

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[99999]"
        onClick={onClose}
      />

      {/* Dialog */}
      <div
        className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-5xl bg-card rounded-2xl border border-border/50 shadow-2xl flex flex-col"
          style={{
            maxHeight: '90vh',
            height: '80vh',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-card rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  Hedi Bouheli — Resume
                </h3>
                <p className="text-xs text-muted-foreground">PDF Preview</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/resume/Hedi-Bouheli.pdf"
                download="Hedi-Bouheli.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:brightness-110 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={onClose}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* PDF Viewer - with minimal controls */}
          <div className="flex-1 relative bg-secondary/20 rounded-b-2xl min-h-0">
            {pdfLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 bg-card/80 rounded-b-2xl">
                <Loader2 size={32} className="text-primary animate-spin" />
                <p className="text-sm text-muted-foreground">Loading resume...</p>
              </div>
            )}
            
            {/* Using iframe with Adobe's embedded PDF viewer for better control */}
            <iframe
              src={`/resume/Hedi-Bouheli.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-fit`}
              className="w-full h-full rounded-b-2xl"
              onLoad={() => setPdfLoading(false)}
              title="Resume PDF"
            />
            
            {/* Fallback for browsers that don't support iframe PDF rendering */}
            <div className="hidden">
              <object
                data="/resume/Hedi-Bouheli.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-fit"
                type="application/pdf"
                className="w-full h-full"
                onLoad={() => setPdfLoading(false)}
              >
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
                  <FileText size={48} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-center">
                    Your browser doesn&apos;t support PDF preview.
                  </p>
                  <a
                    href="/resume/Hedi-Bouheli.pdf"
                    download="Hedi-Bouheli.pdf"
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:brightness-110 transition-all duration-300"
                  >
                    <Download size={18} />
                    Download PDF Instead
                  </a>
                </div>
              </object>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  )
}