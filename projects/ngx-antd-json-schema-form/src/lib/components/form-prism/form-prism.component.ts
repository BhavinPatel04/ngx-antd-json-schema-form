import { Component, AfterViewInit, ElementRef, ViewChild, AfterContentInit, OnChanges, OnDestroy } from "@angular/core";
import { FormGroup } from "@angular/forms";

import "prismjs/prism";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-http";

import { FormItem, FormSettings } from "../../models";

declare var Prism: any;

@Component({
  selector: "form-prism",
  templateUrl: "./form-prism.component.html",
  styleUrls: ["./form-prism.component.scss"]
})
export class PrismComponent implements AfterViewInit, AfterContentInit, OnChanges, OnDestroy {
  private observer: MutationObserver | null;

  group: FormGroup;
  config: FormItem;
  settings: FormSettings;

  @ViewChild("raw") rawViewChild: ElementRef;
  @ViewChild("code") codeViewChild: ElementRef;

  constructor() {}

  onContentChanged() {
    this.codeViewChild.nativeElement.innerHTML = this.config.value
      ? this.encodeEntities(this.config.value)
      : this.rawViewChild.nativeElement.innerHTML;
    Prism.highlightElement(this.codeViewChild.nativeElement);
  }

  ngAfterViewInit() {
    this.onContentChanged();
  }

  ngOnChanges() {
    this.onContentChanged();
  }

  ngAfterContentInit() {
    this.observer = new MutationObserver(this.onContentChanged.bind(this));
    this.observer.observe(this.rawViewChild.nativeElement, {
      characterData: true,
      childList: true,
      subtree: true
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  encodeEntities(value) {
    return value
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
}
