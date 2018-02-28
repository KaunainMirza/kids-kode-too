import {ViewChild, AfterViewInit, ElementRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit{

    code_submission = ''; //will store user code from iframe    
    doc = null; //will hold iframe document 

    @ViewChild('amen') iframe: ElementRef; //code iframe

    constructor() {};


    /**
     * Updates the iframe based on user code
     * @param {ElementRef} - nativeElement of the iframe ie iframe.nativeElement.contentX
     */
    updateResult(doc){
	let content  = "<canvas id='myCanvas' width='200' height='100' style='border:1px solid #d3d3d3;'>Your browser does not support the HTML5 canvas tag.</canvas>";
	
	this.doc.open();
	this.doc.write(content);
	this.doc.close();
    }

    ngAfterViewInit() {
	
	let doc =  this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
	this.doc = doc;
		
    }


    
    
}

