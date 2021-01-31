import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {

  @Output() selectedCDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(
      '1',
      'Gui',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
    new Document(
      '2',
      'Jess',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
    new Document(
      '3',
      'Liv',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
    new Document(
      '4',
      'John',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
    new Document(
      '5',
      'Val',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
    new Document(
      '6',
      'Arthur',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
    new Document(
      '7',
      'Laura',
      'WDD 430',
      'https://github.com/guibyui',
      null
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onSelectedDocument(document: Document) {
    this.selectedCDocumentEvent.emit(document);
  }
}
