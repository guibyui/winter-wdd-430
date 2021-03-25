import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css'],
})
export class DocumentListComponent implements OnInit {
  @Output() selectedCDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [];
  private subscription: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent.subscribe(
      (documentsList: Document[]) => {
        this.documents = documentsList;
      }
    );
  }

  //   this.subscription = this.documentService.documentListChangedEvent.subscribe(
  //     (documentList: Document[]) => {
  //       this.documents = documentList;
  //     }
  //   );
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
