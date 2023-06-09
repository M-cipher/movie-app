'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">final-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' : 'data-target="#xs-components-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' :
                                            'id="xs-components-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeHeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NetworkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetworkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PeopleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PeopleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TvShowsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TvShowsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' : 'data-target="#xs-pipes-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' :
                                            'id="xs-pipes-links-module-AppModule-16d7c0081f2de8d991d926d4d4eabd773ab8150f7f4a0802e5b0b60b9b4ab67341fc22e23dc6969c9ae9f0bd4f70c790af52320a39bcf026c574d6e0bfab6a9a"' }>
                                            <li class="link">
                                                <a href="pipes/SearchPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SeemorePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeemorePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PaginationModule.html" data-type="entity-link" >PaginationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaginationModule-c7f18c0686ac8ecd67f1893f56d8d027e75e4d46c687cd963c6c640c5663f1758fce903333f367e15dd40f925c0d86c92539cc677d5a0ef2e9fd850eec4b20cd"' : 'data-target="#xs-components-links-module-PaginationModule-c7f18c0686ac8ecd67f1893f56d8d027e75e4d46c687cd963c6c640c5663f1758fce903333f367e15dd40f925c0d86c92539cc677d5a0ef2e9fd850eec4b20cd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaginationModule-c7f18c0686ac8ecd67f1893f56d8d027e75e4d46c687cd963c6c640c5663f1758fce903333f367e15dd40f925c0d86c92539cc677d5a0ef2e9fd850eec4b20cd"' :
                                            'id="xs-components-links-module-PaginationModule-c7f18c0686ac8ecd67f1893f56d8d027e75e4d46c687cd963c6c640c5663f1758fce903333f367e15dd40f925c0d86c92539cc677d5a0ef2e9fd850eec4b20cd"' }>
                                            <li class="link">
                                                <a href="components/PaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingModule.html" data-type="entity-link" >SettingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingModule-cbdb92a9377ee0dfc99f3e4886ae7622d961a0ae71d3a3c5a4917e13ff9e22ca8147ae128b882d6d9f785bc4378127bd851e14537d72e8f7f7637b885a0b21be"' : 'data-target="#xs-components-links-module-SettingModule-cbdb92a9377ee0dfc99f3e4886ae7622d961a0ae71d3a3c5a4917e13ff9e22ca8147ae128b882d6d9f785bc4378127bd851e14537d72e8f7f7637b885a0b21be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingModule-cbdb92a9377ee0dfc99f3e4886ae7622d961a0ae71d3a3c5a4917e13ff9e22ca8147ae128b882d6d9f785bc4378127bd851e14537d72e8f7f7637b885a0b21be"' :
                                            'id="xs-components-links-module-SettingModule-cbdb92a9377ee0dfc99f3e4886ae7622d961a0ae71d3a3c5a4917e13ff9e22ca8147ae128b882d6d9f785bc4378127bd851e14537d72e8f7f7637b885a0b21be"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingRoutingModule.html" data-type="entity-link" >SettingRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestModule.html" data-type="entity-link" >TestModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MoviesService.html" data-type="entity-link" >MoviesService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/MoviesInterceptor.html" data-type="entity-link" >MoviesInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});