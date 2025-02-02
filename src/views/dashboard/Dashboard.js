import CIcon from '@coreui/icons-react';
import {
	CBadge,
	CButton,
	CButtonGroup,
	CCallout,
	CCard,
	CCardBody,
	CCardFooter,
	CCardHeader,
	CCol,
	CProgress,
	CRow
} from '@coreui/react';
import React, { lazy } from 'react';
// IMPORT AVATARS
import avaOne from '../../assets/avatars/1.jpg';
import avaTwo from '../../assets/avatars/2.jpg';
import avaThree from '../../assets/avatars/3.jpg';
import avaFour from '../../assets/avatars/4.jpg';
import avaFive from '../../assets/avatars/5.jpg';
import avaSix from '../../assets/avatars/6.jpg';
import MainChartExample from '../charts/MainChartExample.js';

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'));
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'));

const Dashboard = () => {
	return (
		<React.Fragment>
			<WidgetsDropdown />
			<CCard>
				<CCardBody>
					<CRow>
						<CCol sm="5">
							<h4 id="traffic" className="card-title mb-0">
								TRAFFIC
							</h4>
							<div className="small text-muted">Novembre 2021</div>
						</CCol>
						<CCol sm="7" className="d-none d-md-block">
							<CButton color="primary" className="float-right">
								<CIcon name="cil-cloud-download" />
							</CButton>
							<CButtonGroup className="float-right mr-3">
								{[ 'Day', 'Month', 'Year' ].map((value) => (
									<CButton
										color="outline-secondary"
										key={value}
										className="mx-0"
										active={value === 'Month'}
									>
										{value}
									</CButton>
								))}
							</CButtonGroup>
						</CCol>
					</CRow>
					<MainChartExample style={{ height: '300px', marginTop: '40px' }} />
				</CCardBody>
				<CCardFooter>
					<CRow className="text-center">
						<CCol md sm="12" className="mb-sm-2 mb-0">
							<div className="text-muted">Visites</div>
							<strong className="dark">29.703 Users (40%)</strong>
							<CProgress className="progress-xs mt-2" precision={1} color="success" value={40} />
						</CCol>
						<CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
							<div className="text-muted">Uniques</div>
							<strong className="dark">24.093 Users (20%)</strong>
							<CProgress className="progress-xs mt-2" precision={1} color="info" value={40} />
						</CCol>
						<CCol md sm="12" className="mb-sm-2 mb-0">
							<div className="text-muted">Pages vues</div>
							<strong className="dark">78.706 Views (60%)</strong>
							<CProgress className="progress-xs mt-2" precision={1} color="warning" value={40} />
						</CCol>
						<CCol md sm="12" className="mb-sm-2 mb-0">
							<div className="text-muted">Nouveaux Usagers</div>
							<strong className="dark">22.123 Users (80%)</strong>
							<CProgress className="progress-xs mt-2" precision={1} color="danger" value={40} />
						</CCol>
						<CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
							<div className="text-muted">Taux de Rebond</div>
							<strong className="dark">Average Rate (40.15%)</strong>
							<CProgress className="progress-xs mt-2" precision={1} value={40} />
						</CCol>
					</CRow>
				</CCardFooter>
			</CCard>

			<WidgetsBrand withCharts />

			<CRow>
				<CCol>
					<CCard>
						<CCardHeader>Traffique et Ventes</CCardHeader>
						<CCardBody>
							<CRow>
								<CCol xs="12" md="6" xl="6">
									<CRow>
										<CCol sm="6">
											<CCallout color="info">
												<small className="text-muted">Nouveaux Clients</small>
												<br />
												<strong className="h4">9,123</strong>
											</CCallout>
										</CCol>
										<CCol sm="6">
											<CCallout color="danger">
												<small className="text-muted"> Clients Recurrents</small>
												<br />
												<strong className="h4">22,643</strong>
											</CCallout>
										</CCol>
									</CRow>

									<hr className="mt-0" />

									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Lundi</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="34" />
											<CProgress className="progress-xs" color="danger" value="78" />
										</div>
									</div>
									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Mardi</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="56" />
											<CProgress className="progress-xs" color="danger" value="94" />
										</div>
									</div>
									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Mercredi</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="12" />
											<CProgress className="progress-xs" color="danger" value="67" />
										</div>
									</div>
									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Jeudi</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="43" />
											<CProgress className="progress-xs" color="danger" value="91" />
										</div>
									</div>
									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Vendredi</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="22" />
											<CProgress className="progress-xs" color="danger" value="73" />
										</div>
									</div>
									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Samedi</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="53" />
											<CProgress className="progress-xs" color="danger" value="82" />
										</div>
									</div>
									<div className="progress-group mb-4">
										<div className="progress-group-prepend">
											<span className="progress-group-text">Dimanche</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="info" value="9" />
											<CProgress className="progress-xs" color="danger" value="69" />
										</div>
									</div>
									<div className="legend text-center">
										<small>
											<sup className="px-2">
												<CBadge shape="pill" color="info">
													&nbsp;
												</CBadge>
											</sup>
											Nouveaux clients &nbsp;
											<sup className="px-2">
												<CBadge shape="pill" color="danger">
													&nbsp;
												</CBadge>
											</sup>
											Clients Recurrents
										</small>
									</div>
								</CCol>

								<CCol xs="12" md="6" xl="6">
									<CRow>
										<CCol sm="6">
											<CCallout color="warning">
												<small className="text-muted">Pageviews</small>
												<br />
												<strong className="h4">78,623</strong>
											</CCallout>
										</CCol>
										<CCol sm="6">
											<CCallout color="success">
												<small className="text-muted">Organic</small>
												<br />
												<strong className="h4">49,123</strong>
											</CCallout>
										</CCol>
									</CRow>

									<hr className="mt-0" />

									<div className="progress-group mb-4">
										<div className="progress-group-header">
											<CIcon className="progress-group-icon" name="cil-user" />
											<span className="title">Male</span>
											<span className="ml-auto font-weight-bold">43%</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="warning" value="43" />
										</div>
									</div>
									<div className="progress-group mb-5">
										<div className="progress-group-header">
											<CIcon className="progress-group-icon" name="cil-user-female" />
											<span className="title">Female</span>
											<span className="ml-auto font-weight-bold">37%</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="warning" value="37" />
										</div>
									</div>
									<div className="progress-group">
										<div className="progress-group-header">
											<CIcon className="progress-group-icon" name="cil-globe-alt" />
											<span className="title">Organic Search</span>
											<span className="ml-auto font-weight-bold">
												191,235 <span className="text-muted small">(56%)</span>
											</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="success" value="56" />
										</div>
									</div>

									<div className="progress-group">
										<div className="progress-group-header">
											<CIcon name="cib-facebook" className="progress-group-icon" />
											<span className="title">Facebook</span>
											<span className="ml-auto font-weight-bold">
												51,223 <span className="text-muted small">(15%)</span>
											</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="success" value="15" />
										</div>
									</div>
									<div className="progress-group">
										<div className="progress-group-header">
											<CIcon name="cib-twitter" className="progress-group-icon" />
											<span className="title">Twitter</span>
											<span className="ml-auto font-weight-bold">
												37,564 <span className="text-muted small">(11%)</span>
											</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="success" value="11" />
										</div>
									</div>
									<div className="progress-group">
										<div className="progress-group-header">
											<CIcon name="cib-linkedin" className="progress-group-icon" />
											<span className="title">LinkedIn</span>
											<span className="ml-auto font-weight-bold">
												27,319 <span className="text-muted small">(8%)</span>
											</span>
										</div>
										<div className="progress-group-bars">
											<CProgress className="progress-xs" color="success" value="8" />
										</div>
									</div>
									<div className="divider text-center">
										<CButton color="link" size="sm" className="text-muted">
											<CIcon name="cil-options" />
										</CButton>
									</div>
								</CCol>
							</CRow>

							<br />

							<table className="table table-hover table-outline mb-0 d-none d-sm-table">
								<thead className="thead-light">
									<tr>
										<th className="text-center">
											<CIcon name="cil-people" />
										</th>
										<th>Client</th>
										<th className="text-center">Pays</th>
										<th>Usage</th>
										<th className="text-center">Méthode Paiement</th>
										<th>Activité</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="text-center">
											<div className="c-avatar">
												<img
													src={avaOne}
													className="c-avatar-img"
													alt="admin@bootstrapmaster.com"
												/>
												<span className="c-avatar-status bg-success" />
											</div>
										</td>
										<td>
											<div>Yiorgos Avraamu</div>
											<div className="small text-muted">
												<span>New</span> | Registered: Jan 1, 2015
											</div>
										</td>
										<td className="text-center">
											<CIcon height={25} name="cif-us" title="us" id="us" />
										</td>
										<td>
											<div className="clearfix">
												<div className="float-left">
													<strong>50%</strong>
												</div>
												<div className="float-right">
													<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
												</div>
											</div>
											<CProgress className="progress-xs" color="success" value="50" />
										</td>
										<td className="text-center">
											<CIcon height={25} name="cib-cc-mastercard" />
										</td>
										<td>
											<div className="small text-muted">Last login</div>
											<strong>10 sec ago</strong>
										</td>
									</tr>
									<tr>
										<td className="text-center">
											<div className="c-avatar">
												<img
													src={avaTwo}
													className="c-avatar-img"
													alt="admin@bootstrapmaster.com"
												/>
												<span className="c-avatar-status bg-danger" />
											</div>
										</td>
										<td>
											<div>Avram Tarasios</div>
											<div className="small text-muted">
												<span>Recurring</span> | Registered: Jan 1, 2015
											</div>
										</td>
										<td className="text-center">
											<CIcon height={25} name="cif-br" title="br" id="br" />
										</td>
										<td>
											<div className="clearfix">
												<div className="float-left">
													<strong>10%</strong>
												</div>
												<div className="float-right">
													<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
												</div>
											</div>
											<CProgress className="progress-xs" color="info" value="10" />
										</td>
										<td className="text-center">
											<CIcon height={25} name="cib-cc-visa" />
										</td>
										<td>
											<div className="small text-muted">Last login</div>
											<strong>5 minutes ago</strong>
										</td>
									</tr>
									<tr>
										<td className="text-center">
											<div className="c-avatar">
												<img
													src={avaThree}
													className="c-avatar-img"
													alt="admin@bootstrapmaster.com"
												/>
												<span className="c-avatar-status bg-warning" />
											</div>
										</td>
										<td>
											<div>Quintin Ed</div>
											<div className="small text-muted">
												<span>New</span> | Registered: Jan 1, 2015
											</div>
										</td>
										<td className="text-center">
											<CIcon height={25} name="cif-in" title="in" id="in" />
										</td>
										<td>
											<div className="clearfix">
												<div className="float-left">
													<strong>74%</strong>
												</div>
												<div className="float-right">
													<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
												</div>
											</div>
											<CProgress className="progress-xs" color="warning" value="74" />
										</td>
										<td className="text-center">
											<CIcon height={25} name="cib-stripe" />
										</td>
										<td>
											<div className="small text-muted">Last login</div>
											<strong>1 hour ago</strong>
										</td>
									</tr>
									<tr>
										<td className="text-center">
											<div className="c-avatar">
												<img
													src={avaFour}
													className="c-avatar-img"
													alt="admin@bootstrapmaster.com"
												/>
												<span className="c-avatar-status bg-secondary" />
											</div>
										</td>
										<td>
											<div>Enéas Kwadwo</div>
											<div className="small text-muted">
												<span>New</span> | Registered: Jan 1, 2015
											</div>
										</td>
										<td className="text-center">
											<CIcon height={25} name="cif-fr" title="fr" id="fr" />
										</td>
										<td>
											<div className="clearfix">
												<div className="float-left">
													<strong>98%</strong>
												</div>
												<div className="float-right">
													<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
												</div>
											</div>
											<CProgress className="progress-xs" color="danger" value="98" />
										</td>
										<td className="text-center">
											<CIcon height={25} name="cib-paypal" />
										</td>
										<td>
											<div className="small text-muted">Last login</div>
											<strong>Last month</strong>
										</td>
									</tr>
									<tr>
										<td className="text-center">
											<div className="c-avatar">
												<img
													src={avaFive}
													className="c-avatar-img"
													alt="admin@bootstrapmaster.com"
												/>
												<span className="c-avatar-status bg-success" />
											</div>
										</td>
										<td>
											<div>Agapetus Tadeáš</div>
											<div className="small text-muted">
												<span>New</span> | Registered: Jan 1, 2015
											</div>
										</td>
										<td className="text-center">
											<CIcon height={25} name="cif-es" title="es" id="es" />
										</td>
										<td>
											<div className="clearfix">
												<div className="float-left">
													<strong>22%</strong>
												</div>
												<div className="float-right">
													<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
												</div>
											</div>
											<CProgress className="progress-xs" color="info" value="22" />
										</td>
										<td className="text-center">
											<CIcon height={25} name="cib-google-pay" />
										</td>
										<td>
											<div className="small text-muted">Last login</div>
											<strong>Last week</strong>
										</td>
									</tr>
									<tr>
										<td className="text-center">
											<div className="c-avatar">
												<img
													src={avaSix}
													className="c-avatar-img"
													alt="admin@bootstrapmaster.com"
												/>
												<span className="c-avatar-status bg-danger" />
											</div>
										</td>
										<td>
											<div>Friderik Dávid</div>
											<div className="small text-muted">
												<span>New</span> | Registered: Jan 1, 2015
											</div>
										</td>
										<td className="text-center">
											<CIcon height={25} name="cif-pl" title="pl" id="pl" />
										</td>
										<td>
											<div className="clearfix">
												<div className="float-left">
													<strong>43%</strong>
												</div>
												<div className="float-right">
													<small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
												</div>
											</div>
											<CProgress className="progress-xs" color="success" value="43" />
										</td>
										<td className="text-center">
											<CIcon height={25} name="cib-cc-amex" />
										</td>
										<td>
											<div className="small text-muted">Last login</div>
											<strong>Yesterday</strong>
										</td>
									</tr>
								</tbody>
							</table>
						</CCardBody>
					</CCard>
				</CCol>
			</CRow>
		</React.Fragment>
	);
};

export default Dashboard;
