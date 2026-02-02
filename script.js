// PDF Viewer Configuration
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;
const canvas = document.getElementById('pdfCanvas');
const ctx = canvas.getContext('2d');

// Render the page
function renderPage(num) {
    pageRendering = true;

    pdfDoc.getPage(num).then(function(page) {
        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        const renderTask = page.render(renderContext);

        renderTask.promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });
    });

    // Update page info
    document.getElementById('pageInfo').textContent = `Page ${num} of ${pdfDoc.numPages}`;

    // Update button states
    document.getElementById('prevPage').disabled = (num <= 1);
    document.getElementById('nextPage').disabled = (num >= pdfDoc.numPages);
}

// Queue page rendering
function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

// Previous page
function onPrevPage() {
    if (pageNum <= 1) {
        return;
    }
    pageNum--;
    queueRenderPage(pageNum);
}

// Next page
function onNextPage() {
    if (pageNum >= pdfDoc.numPages) {
        return;
    }
    pageNum++;
    queueRenderPage(pageNum);
}

// Load PDF
function loadPDF(url) {
    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
        pdfDoc = pdf;
        pageNum = 1;
        renderPage(pageNum);
    }).catch(function(error) {
        console.error('Error loading PDF:', error);
        alert('Could not load PDF. Make sure the file exists in the correct location.');
    });
}

// Modal functionality
const modal = document.getElementById('pdfModal');
const closeBtn = document.querySelector('.close-modal');

// Portfolio item click handlers
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const pdfFile = this.getAttribute('data-pdf');
        if (pdfFile) {
            modal.classList.add('active');
            loadPDF(pdfFile);
        }
    });
});

// Close modal
closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    pdfDoc = null;
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('active');
        pdfDoc = null;
    }
});

// Navigation buttons
document.getElementById('prevPage').addEventListener('click', onPrevPage);
document.getElementById('nextPage').addEventListener('click', onNextPage);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            onPrevPage();
        } else if (e.key === 'ArrowRight') {
            onNextPage();
        } else if (e.key === 'Escape') {
            modal.classList.remove('active');
            pdfDoc = null;
        }
    }
});

// Smooth scrolling for anchor links (if you add navigation later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
